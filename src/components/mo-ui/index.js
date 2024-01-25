import Switch from "./switch/index.js";
import Pagination from "./pagination/index.js";
import Table from "./table/index.vue";

import Input from "./input/index";
import AreaPicker from "./area-picker/index";

import Image from "./image/index.vue";
import IconName from "./iconname/index.vue";
import UserName from "./username/index.vue";
import UserIcon from "./usericon/index.vue";

import EditButton from "./button/edit-button/index.vue";
import ChartButton from "./button/chart-button/index.vue";
import DetailButton from "./button/detail-button/index.vue";
import SuccessButton from "./button/success-button/index.vue";
import AddButton from "./button/add-button/index.vue";
import LinkButton from "./button/link-button/index.vue";
import DeleteButton from "./button/delete-button/index.vue";
import UploadButton from "./button/upload-button/index.vue";
import PushButton from "./button/push-button/index.vue";

import Join from "./join/index.vue";
import Link from "./link/index.vue";
import Text from "./text/index.vue";

const components = [
  AreaPicker,
  Switch,
  Pagination,
  Table,
  Image,
  ChartButton,
  Input,
  UserName,
  UserIcon,
  EditButton,
  DetailButton,
  SuccessButton,
  IconName,
  Join,
  Text,
  Link,
  AddButton,
  LinkButton,
  DeleteButton,
  UploadButton,
  PushButton
];

const install = function(Vue, options) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  ...components
};
