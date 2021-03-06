describe("FluxoReactConnectStores", function () {
  it("reacts on Fluxo store", function() {
    var person = new Fluxo.Store({ name: "Samuel" });

    var Component = React.createClass({
      displayName: "Component",

      render: function() {
        return React.createElement("p", null, this.props.person.name);
      }
    });

    Component = FluxoReactConnectStores(Component, { person: person });

    expect(Component.displayName).to.be.eql("FluxoReactConnectStores(Component)");

    var shallowRenderer = React.addons.TestUtils.createRenderer();

    shallowRenderer.render(React.createElement(Component));

    var result = shallowRenderer.getRenderOutput();

    expect(result.props.person.name).to.be.eql("Samuel");

    person.setAttribute("name", "Samuel Simões");

    result = shallowRenderer.getRenderOutput();

    expect(result.props.person.name).to.be.eql("Samuel Simões");
  });
});
