var mystack = stack()
    .on("activate", activate)
    .on("deactivate", deactivate);

var section = d3.selectAll("section"),
    follow = d3.select("#follow"),
    followAnchor = d3.select("#follow-anchor"),
    lorenz = d3.select("#lorenz"),
    followIndex = section[0].indexOf(follow.node()),
    lorenzIndex = section[0].indexOf(lorenz.node());

function refollow() {
    followAnchor.style("top", (followIndex + (1 - mystack.scrollRatio()) / 2 - d3.event.offset) * 100 + "%");
}

function activate(d, i) {
    if (i === followIndex) mystack.on("scroll.follow", refollow);
    if (i === lorenzIndex) startLorenz();
}

function deactivate(d, i) {
    if (i === followIndex) mystack.on("scroll.follow", null);
    if (i === lorenzIndex) stopLorenz();
}
