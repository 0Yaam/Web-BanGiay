# Deploy VPS bằng GitHub Actions

Workflow đã được thêm ở `.github/workflows/deploy-vps.yml`.

## Cách hoạt động

- GitHub Actions chạy `npm ci` và `npm run build`.
- Upload thư mục `dist/` lên VPS bằng `rsync` qua SSH.
- Tạo nginx site trỏ tới thư mục build.
- Site chạy bằng địa chỉ dạng:

```text
http://<VPS_HOST>:47831
```

Cổng mặc định là `47831`. Nếu cổng này đã bận, đổi bằng secret `VPS_APP_PORT`.

## Secret cần tạo trên GitHub

Vào repository GitHub: `Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`.

Tạo các secret sau:

```text
VPS_HOST=1.2.3.4
VPS_USER=ubuntu
VPS_PORT=22
VPS_SSH_PRIVATE_KEY=<private key dùng để SSH vào VPS>
VPS_APP_PORT=47831
VPS_DEPLOY_PATH=/var/www/web-bangiay
```

`VPS_PORT`, `VPS_APP_PORT`, `VPS_DEPLOY_PATH` có default, nhưng vẫn nên set rõ.

## Chuẩn bị VPS

Trên VPS cần có nginx và user deploy cần chạy được `sudo` không hỏi password cho các lệnh nginx.

Ubuntu/Debian:

```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

Mở firewall cho cổng deploy:

```bash
sudo ufw allow 47831/tcp
sudo ufw status
```

Nếu VPS dùng firewall của nhà cung cấp cloud, mở thêm inbound TCP port `47831` trên dashboard.

## Chạy deploy

Push lên branch `main` hoặc `master`, workflow tự chạy.

Cũng có thể chạy tay trong tab `Actions` -> `Deploy to VPS` -> `Run workflow`.

Sau khi chạy xong, mở:

```text
http://<IP_VPS>:47831
```

## Đổi cổng

Nếu VPS đang dùng nhiều cổng, đổi secret:

```text
VPS_APP_PORT=48673
```

Sau đó rerun workflow và mở:

```text
http://<IP_VPS>:48673
```
