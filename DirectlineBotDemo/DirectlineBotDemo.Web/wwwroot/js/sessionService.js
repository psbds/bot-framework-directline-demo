var sessionService = {
    SESSION_KEY: "DirectLineSession",
    getSession: function () {
        var data = sessionStorage.getItem(this.SESSION_KEY);
        return data ? JSON.parse(data) : data;
    },
    setSession: function (data) {
        return sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(data));
    }
}