Events.on(ClientLoadEvent, () => {
    Timer.schedule(() => {
        Vars.ui.menuGroup.children.get(0).children.get(1).clearChildren();
    }, 2, 0.2, 15);
    var table = new Table(Tex.clear);
    table.margin(12);
    table.button("", new TextureRegionDrawable(Core.atlas.find("clear")), Styles.cleart, () => {
        Core.settings.put("mod-mindustrynt-enabled", false);
        Core.app.exit();
    });
    table.pack();
    
    Core.scene.table().bottom().add(table);
});
