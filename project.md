## Mô tả:
đây là 1 màn hình web, giả lập màn hình desktop, với các app icon dưới màn hình desktop, được sắp xếp theo dạng grid và có thể drag để di chuyển vị trí. khi double click sẽ mở ra các cửa sổ y như hệ điều hành thật với các chức năng như đóng cửa sổ, thu gọn, phóng to-thu nhỏ, ở các cạnh và góc cửa sổ khi hover vào thì hiện chuột resize để người dùng biết được là cửa sổ có thể drag để resize được . Phía trên cùng là menu tương ứng với menu của hệ điều hành macos. dưới nền là ảnh nền màn hình. các app icon và các cửa sổ chính là cách thức để truy cập các chức năng/page, các cửa sổ nào mở, size bao nhiêu, vị trí nào, cái nào đang focus đều được mã hóa lại và chuyển lên url.
Hình ảnh như 1 ví dụ minh họa.

## Yêu cầu:
- Hãy lên kế hoạch, để tạo 1 ứng dụng bằng nextjs/astro/react, react 19, typescript kết hợp với tailwindcss v4, shadcn, clsx, motion (cho animation), react query, zustand, zod...
- cung cấp ra các loại theme, tương ứng với các loại thiết bị như macos 26 (có hiệu ứng liquid glass), window 11, ipad os 26 (có hiệu ứng liquid glass),, iphone os  26 (có hiệu ứng liquid glass), Android.
- với theme macos thì responsive sẽ về ipad os và iphone os
- với window thì resize nhỏ đi phù hợp với mobile
- với android thì resize nhỏ đi phù hợp mobile
- với ios và android thì sẽ có menubar ở dưới, các app khi bật thì fullscreen --> hiển thị y như mobile
- với macos thì có dock các app ở dưới, menubar ở trên và các đặc trưng của macos
- với window thì menubar ở dưới, và các đặc trưng của window 11
- menubar cũng hiển thị các thông tin như bên phải có đồng hồ, ngày tháng, wifi, notify, control.
- Cần có kiến trúc có thể mở rộng dễ dàng
- các app có thể được khai báo bằng json config, tức là cấu hình các thông tin như app name, icon, bật lên cái gì (cửa sổ khi bật lên là gì) có disable không, context menu trên app icon có gì....
- các trạng thái nếu cần có thể lưu trữ local storage..
- sử dụng service worker để đảm bảo có thể chạy được offline với các thành phần không cần internet hoặc caching các nội dung để sử dụng offline
- khi click chuột phải ở desktop có tùy chọn thay đổi wallpaper để bật lên cửa sổ chọn wallpaper
- với macos và window11 style các cửa sổ có thể di chuyển thay đổi vị trí và xử lý giống trên macos tức là khi di chuyển đến cạnh thì có sẽ phải dừng lại ở cạnh 1 đoạn trước khi có thể kéo được ra ngoài, resize, fullscreen, thoát fullscreen về kích thước và vị trí cũ trước khi fullscreen 
- khi click vào cửa sổ nào thì active cửa sổ đó và cửa sổ đó nổi lên trên cùng
- các cửa sổ có thể có hoặc không có phần menu phía trên, status bar phía dưới. cái này sẽ do các app định nghĩa
- hỗ trợ dark/light/theo hệ thống
- liquid glass có thể tham khảo ở đây https://raw.githubusercontent.com/bergice/liquidglass/refs/heads/main/index.html