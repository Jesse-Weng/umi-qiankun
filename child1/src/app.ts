export const qiankun = {
    // 应用加载之前
    async bootstrap(props: any) {
        console.log("ABSRemindChild bootstrap", props);
        localStorage.setItem("ABSRemindChild", (props && props.browser) || "");
    },
    // 应用 render 之前触发
    async mount(props: any) {
        console.log("ABSRemindChild mount", props);
        localStorage.setItem("ABSRemindChild", (props && props.browser) || "");
    },
    // 应用卸载之后触发
    async unmount(props: any) {
        console.log("ABSRemindChild unmount", props);
        localStorage.removeItem("ABSRemindChild");
    },
};