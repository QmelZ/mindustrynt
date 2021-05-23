Events.on(ClientLoadEvent, () => {
    Events.on(Trigger.update.class, () => {
        Vars.ui.menuGroup.children.get(0).children.get(1).clearChildren();
    });
    let table = new Table(Tex.clear);
    table.margin(12);
    table.button("", new TextureRegionDrawable(Core.atlas.find("clear")), Styles.cleart, () => {
        Core.settings.put("mod-mindustrynt-enabled", false);
        Core.app.exit();
    });
    table.pack();
    
    Core.scene.table().bottom().add(table);
});
