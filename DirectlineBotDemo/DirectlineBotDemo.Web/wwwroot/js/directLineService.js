var directLineService = {
    AUTH_SECRET: "xxxxxxxxxxxxxxxxx",
    startConversation: function () {
        return $.ajax({
            url: "https://directline.botframework.com/v3/directline/conversations",
            method: "POST",
            headers: {
                "Authorization": "Bearer " + this.AUTH_SECRET
            }
        });
    },
    sendMessage: function (conversationId, data) {
        return $.ajax({
            url: "https://directline.botframework.com/v3/directline/conversations/" + conversationId + "/activities",
            method: "POST",
            headers: {
                "Authorization": "Bearer " + this.AUTH_SECRET,
                "Content-Type":"application/json"
            },
            data: JSON.stringify(data)
        });
    },
    reconnect: function (conversationId) {
        return $.ajax({
            url: "https://directline.botframework.com/v3/directline/conversations/" + conversationId+"?watermark=0",
            method: "GET",
            headers: {
                "Authorization": "Bearer " + this.AUTH_SECRET,
                "Content-Type": "application/json"
            }
        });
    }
}