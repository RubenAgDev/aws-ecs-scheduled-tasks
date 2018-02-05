const AWS = require("aws-sdk");
const CloudWatchEvents = new AWS.CloudWatchEvents({
    region: "us-east-1"
});

const RULE_NAME = "hello-world-rule";

console.log("Started!");

CloudWatchEvents.putRule({
    Name: RULE_NAME,
    ScheduleExpression: "cron(21 16 01 NOV ? 2017)", // UTC Time Zone (more info: http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#RateExpressions)
}, (error, data) => {
    if(error) {
        console.error(error);
    } else {
        CloudWatchEvents.putTargets({
            Rule: RULE_NAME,
            Targets: [{
                Arn: "arn:aws:ecs:us-east-1:216159606323:cluster/music-licensing",
                Id: "hello-world-target-1",
                EcsParameters: {
                    TaskDefinitionArn: "arn:aws:ecs:us-east-1:216159606323:task-definition/hello-world-task:2",
                    TaskCount: 1
                },
                RoleArn: "arn:aws:iam::216159606323:role/ecsEventsRole"
            }]
        }, (error, data) => {
            if(error) {
                console.error(error);
            } else {
                console.log(data);
            }

            console.log("Ended!");
        });
    }
});    
