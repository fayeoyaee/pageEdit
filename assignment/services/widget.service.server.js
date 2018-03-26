widgets = [
    { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
    { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
    { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://lorempixel.com/400/200/" },
    { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
    { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
    { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://www.youtube.com/embed/XPrxhmuzUyo" },
    { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
];

module.exports = function (app) {
    // create
    app.post('/api/page/:pageId/widget', function (req, res) {
        var pageId = req.params.pageId;
        var widget = req.body;

        widget.pageId = pageId;
        this.widgets.push(widget);
    });

    // findAll
    app.get('/api/page/:pageId/widget', function (req, res) {
        var pageId = req.params.pageId;

        var pageWidgets = [{}];
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId == pageId) {
                pageWidgets.push(this.widgets[x]);
            }
        }
        pageWidgets.splice(0, 1);
        return res.send(pageWidgets);
    });

    // findById
    app.get('/api/widget/:widgetId', function (req, res) {
        var widgetId = req.params.widgetId;

        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                return res.send(this.widgets[x]);
            }
        }
    });

    // update
    app.put('/api/widget/:widgetId', function (req, res) {
        var widgetId = req.params.widgetId;
        var widget = req.body;

        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                this.widgets[x] = widget;
            }
        }
    });

    // delete
    app.delete('api/widget/:widgetId', function (req, res) {
        console.log("Get delete widget req");

        var widgetId = req.params.widgetId;
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                this.widgets.splice(x, 1);
                return;
            }
        }

    });

}