import React from "react";
import "./Description.scss";

const outstandingFeatureArr = [
  "Mạnh mẽ, siêu nhanh với chip A14, RAM 6GB, mạng 5G tốc độ cao",
  "Rực rỡ, sắc nét, độ sáng cao - Màn hình OLED cao cấp, Super Retina XDR hỗ trợ HDR10, Dolby Vision",
  "Chụp ảnh siêu đỉnh - Night Mode , thuật toán Deep Fusion, Smart HDR 3, camera LiDar",
  "Bền bỉ vượt trội - Kháng nước, kháng bụi IP68, mặt lưng Ceramic Shield",
];

const detailFeatureArr = [
  "Điện thoại iPhone 13 phiên bản Pro Max chắc chắn sẽ là chiếc smartphone cao cấp được quan tâm nhiều nhất trong năm 2021. Dòng iPhone 13 series vừa được ra mắt vào tháng 9 năm nay với 4 phiên bản: iPhone 13, 13 mini, 13 Pro và 13 Pro Max.",
  "/strong/Điện thoại iPhone 12 Pro - Đột phá về thiết kế, hiệu năng nâng cấp",
  "Ra mắt vào cuối năm 2020, iPhone 12 series mang đến một luồng gió với trong phân khúc smartphone cao cấp. Với thiết kế đổi mới đột phá so với thế hệ trước cùng nhiều nâng cấp về hiệu năng đáng kể trên iPhone 12 Pro. Đây sẽ là một trong những chiếc điện thoại đáng được bạn lựa chọn nhất so với các chiếc điện thoại khác cùng phân khúc giá.  ",
  "/strong/Thiết kế đột phá kiểu mới khung thép không gỉ, màn hình Super Retina 6.1 inch ",
  "Sau một thời dài ra mắt các sản phẩm mới có chút ít thay đổi về thiết kế bên ngoài. Năm 2020, iPhone 12 Pro mang đến một phong cách thiết kế đột phá hơn với phần viền được CNC vuông bo tròn như hơi hướng của người anh iPhone 5.",
  "Chất liệu thiết kế của điện thoại iPhone 12 phiên bản Pro cũng được làm từ thép không gỉ, mang đến cảm giác cầm nắm chắc chắn và cứng cáp hơn. Màu sắc trên điện thoại ngoài các màu cơ bản cũ cũng có thêm màu Xanh Navy đẹp hơn tinh tế hơn.",
  "https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-12-pro-1.jpg",
  "Màn hình trên điện thoại iPhone 12 Pro vẫn giữ nguyên thiết kế tai thỏ nhưng phần viền được Apple thiết kế mỏng hơn mang đến một cái nhìn hoàn toàn mới về màn hình trên điện thoại.",
  "Với kích thước màn hình lớn lên đến 6.1 inch sử dụng tấm nền Super Retina XDR OLED với độ phân giải 2K mọi hình ảnh đều được tái hiện sắc nét đến từng chi tiết trên một không gian rộng đủ để bạn thoải mái sử dụng.  ",
  "/strong/Cấu hình hiệu năng mạnh mẽ với chip Apple A14 Bionic, bộ nhớ ram 6Gb, bộ nhớ trong dung lượng lớn",
  "Như thường lệ mỗi năm Apple đều sản xuất ra những chiếc iPhone mới với những con chip thế hệ mới nhất. Năm nay cũng vậy điện thoại siêu phẩm iPhone 12 Pro lần này được sử dụng con chip A14 Bionic với 6 nhân cho tốc độ xử lý xung nhịp lên đến 3.1GHz.",
  "Mọi ứng dụng đều được xử lý với tốc độ rất nhanh chóng đối với tất cả các tác vụ. Bộ nhớ ram của điện thoại cũng được nâng cấp lên đến 6Gb cho khả năng đa nhiệm cùng lúc nhiều ứng dụng mượt mà.",
  "https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-12-pro.jpg",
  "Năm nay bộ nhớ trong tối thiểu trên điện thoại iPhone 12 Pro đã được nâng cấp lên 128Gb. Tăng khả năng lưu trữ gấp đôi so với phiên bản basic nhất như các dòng iPhone Pro thế hệ trước.",
  "Apple cũng hỗ trợ nhiều mức dung lượng nữa bao gồm 256Gb và 512Gb đến cho người dùng. Với những mức dung lượng này người dùng có thể thoải mái lưu trữ dữ liệu, cài đặt ứng dụng, game nặng mà không bị đầy bộ nhớ khi sử dụng.",
  "/strong/Bộ ba camera sau + cảm biến LiDAR, camera trước siêu sắc nét",
  "Tương tự như điện thoại iPhone 12 Pro Max, phiên bản Pro cũng được Apple đã trang bị bộ ba camera chất lượng cao cùng độ phân giải 12MP bao gồm camera chính góc rộng, camera góc siêu rộng và ống kính tele. Máy cũng được trang bị ống kính cảm biến LiDAR cho khả năng chụp ảnh sắc nét và chất thật nhất. Khả năng chụp góc rộng và Zoom trên siêu phẩm cũng được nâng cấp đáng kể cho chất lượng và khả năng chụp ảnh tốt hơn.",
  "https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-12-pro-6.jpg",
  "Camera trước của máy được trang bị độ phân giải khá cao. Cho khả năng selfie góc rộng hơn. Với nhiều chế độ chụp hình ảnh được tái hiện và xử lý thông minh hơn với công nghệ AI camera của Apple. Bạn có thể sử dụng thoải mái smartphone cho các tác vụ như selfie, quay bằng camera trước hoặc gọi video call qua ứng dụng một cách dễ dàng.",
  "/strong/Pin lithium – ion dung lượng cao, hỗ trợ sạc nhanh 20W",
  "Là chiếc điện thoại có hiệu năng mạnh mẽ cùng màn hình kích thước lớn. Vì vậy Apple đã trang bị cho iPhone 12 Pro một khoảng dung lượng pin lớn. Với khoảng dung lượng này người dùng có thể thoải mái sử dụng cả một ngày dài mà không lo hết pin. Máy cũng được trang bị công nghệ sạc nhanh với công suất lớn cho thời gian sạc đầy pin nhanh chóng.",
  "https://cdn.cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-12-pro-7_1.jpg",
];

const handleRender = (feature) => {
  if (feature.includes("/strong/"))
    return <strong>{feature.replace("/strong/", "")}</strong>;
  if (feature.includes("https")) return <img src={feature} alt="" />;
  return <p>{feature}</p>;
};

const Description = () => {
  return (
    <div className="description">
      <div className="outstanding-feature">
        <strong>Đặc điểm nổi bật</strong>
        <ul>
          {outstandingFeatureArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="detail-feature">
        {detailFeatureArr.map((item, index) => (
          <div key={index}>{handleRender(item)}</div>
        ))}
      </div>
    </div>
  );
};

export default Description;
