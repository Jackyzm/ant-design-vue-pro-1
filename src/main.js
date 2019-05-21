import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";
import VueHighlightJS from "vue-highlightjs";

import {
  Button,
  Layout,
  Icon,
  Tooltip,
  Dropdown,
  Avatar,
  Spin,
  AutoComplete,
  Input,
  Menu,
  Popover,
  Badge,
  Tabs,
  List,
  Tag,
  Row,
  Col,
  Card,
  DatePicker,
  Radio,
  Table,
  Divider,
  Breadcrumb,
  Form,
  Select,
  Popconfirm,
  Modal,
  LocaleProvider,
  Drawer
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
import "highlight.js/styles/github.css";

Vue.config.productionTip = false;

const { Content, Header, Footer, Sider } = Layout;
const MenuItem = Menu.Item;
const MenuDivider = Menu.Divider;
const MenuSubMenu = Menu.SubMenu;
const TabsTabPane = Tabs.TabPane;
const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
const { RangePicker } = DatePicker;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CardGrid = Card.Grid;
const CardMeta = Card.Meta;
const BreadcrumbItem = Breadcrumb.Item;
const FormItem = Form.Item;

Vue.use(Button);
Vue.use(Button.Group);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Spin);
Vue.use(AutoComplete);
Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuDivider);
Vue.use(Popover);
Vue.use(Badge);
Vue.use(Tabs);
Vue.use(TabsTabPane);
Vue.use(List);
Vue.use(ListItem);
Vue.use(ListItemMeta);
Vue.use(Tag);
Vue.use(Tag.CheckableTag);
Vue.use(MenuSubMenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(CardGrid);
Vue.use(CardMeta);
Vue.use(DatePicker);
Vue.use(RangePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Table);
Vue.use(Divider);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Select.Option);
Vue.use(Popconfirm);
Vue.use(Modal);
Vue.use(Content);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Sider);
Vue.use(LocaleProvider);
Vue.use(Drawer);

Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(VueI18n);
Vue.use(VueHighlightJS);

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
});

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1154049_w87h4oeytph.js" // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
