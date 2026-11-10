const $ = (id) => document.getElementById(id);
const orderDialog = $("orderDialog");
const payDialog = $("payDialog");
let currentOrder = null;
$("year").textContent = new Date().getFullYear();

$("buyBtn").addEventListener("click", () => {
  // 生成订单后直接打开支付宝二维码弹窗，一次点击即可看到收款码。
  currentOrder = {
    id: makeOrderId(),
    product: "VPN 年度套餐",
    amount: "39.90",
    currency: "CNY",
    durationDays: 365,
    customer: "网站访客",
    contact: "",
    createdAt: new Date().toISOString(),
    status: "待付款",
    paymentRef: "",
    paymentNote: ""
  };
  const orders = getOrders();
  orders.push(currentOrder);
  saveOrders(orders);
  $("orderNumber").textContent = currentOrder.id;
  $("paymentRef").value = "";
  $("paymentNote").value = "";
  $("savedMessage").textContent = "";
  payDialog.showModal();
});

function makeOrderId() {
  const d = new Date();
  const stamp = d.getFullYear().toString() +
    String(d.getMonth()+1).padStart(2,"0") +
    String(d.getDate()).padStart(2,"0");
  const random = Math.random().toString(36).slice(2,8).toUpperCase();
  return `VPN${stamp}${random}`;
}
function getOrders() {
  try { return JSON.parse(localStorage.getItem("annual_service_orders") || "[]"); }
  catch { return []; }
}
function saveOrders(orders) {
  localStorage.setItem("annual_service_orders", JSON.stringify(orders));
}

$("savePayment").addEventListener("click", () => {
  if (!currentOrder) return;
  const orders = getOrders();
  const i = orders.findIndex(o => o.id === currentOrder.id);
  if (i >= 0) {
    orders[i].paymentRef = $("paymentRef").value.trim();
    orders[i].paymentNote = $("paymentNote").value.trim();
    orders[i].status = "待人工核实";
    orders[i].submittedAt = new Date().toISOString();
    saveOrders(orders);
    currentOrder = orders[i];
    $("savedMessage").textContent = "已保存在当前浏览器。请另行联系管理员提交订单编号：" + currentOrder.id;
  }
});
