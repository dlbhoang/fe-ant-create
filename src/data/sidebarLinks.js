import { ROLE_TYPE } from "../utils/constants";
const sidebarLinks = [
  {
    id: 1,
    name: "Hồ sơ của tôi",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Trang tổng quan",
    path: "/dashboard/instructor",
    type: ROLE_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Khóa học của tôi",
    path: "/dashboard/my-courses",
    type: ROLE_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Thêm khóa học",
    path: "/dashboard/add-course",
    type: ROLE_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Các khóa học đã đăng ký",
    path: "/dashboard/enrolled-courses",
    type: ROLE_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Giỏ hàng",
    path: "/dashboard/cart",
    type: ROLE_TYPE.STUDENT,
    icon: "AiOutlineShoppingCart",
  },
 
];

export default sidebarLinks
