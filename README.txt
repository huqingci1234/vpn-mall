# VPN 年度套餐静态网站

## 文件
- `index.html`：页面结构、套餐、订单弹窗、法律声明
- `style.css`：蓝紫色动态光效、玻璃卡片、手机适配
- `script.js`：本地生成订单号，并在当前浏览器 localStorage 保存订单
- `assets/background.jpg`：根据你上传的照片制作的网页背景
- `assets/background-4k.jpg`：放大增强版照片（2880×3840）

## 重要限制
这是 GitHub Pages 静态网站演示版：
1. 订单只保存在客户当前浏览器，管理员无法自动收到订单，也不能跨设备查询。
2. 页面目前没有真实支付宝二维码。请把自己的支付宝收款码图片放入 `assets` 文件夹并命名为 `alipay-qr.png`；当前页面显示的是占位区域，需在 `index.html` 中将占位区域替换为 `<img src="assets/alipay-qr.png" alt="支付宝收款码">`，并在 `style.css` 中为图片设置宽高。
3. 不会自动验证到账。请以支付宝账户实际到账记录为准。
4. 如需订单集中管理、后台审核、跨设备查询，需要增加合规的后端数据库/接口；GitHub Pages 本身不能承担这些功能。
5. 请确保服务及经营行为符合所在地法律法规，并取得依法需要的许可。免责声明不替代许可。

## GitHub Pages 部署
1. 登录 GitHub，点击右上角 `+` → `New repository`。
2. 仓库名称可填 `annual-service-site`，选择 `Public`，点击 `Create repository`。
3. 解压本压缩包，把 `index.html`、`style.css`、`script.js` 和 `assets` 文件夹全部上传到仓库根目录。
4. 打开仓库 `Settings` → `Pages`。
5. 在 `Build and deployment` 下，`Source` 选择 `Deploy from a branch`。
6. `Branch` 选择 `main`，目录选择 `/ (root)`，点击 `Save`。
7. 等待部署完成，GitHub Pages 会显示网站地址。

## 替换支付宝收款码
上传收款码文件到 `assets/alipay-qr.png`，然后按上方说明修改 `index.html` 的二维码占位块。不要把付款密码、私钥或任何账户凭据写进网页代码。


## 支付按钮流程更新
首页的「支付宝支付」按钮现在点击一次就会生成订单编号并弹出内置收款二维码页面。静态页面仍不会自动核验到账。
