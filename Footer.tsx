import React from 'react'
import chungNhan1 from "../assets/chung-nhan1.png"
import chungNhan2 from "../assets/chung-nhan2.png"
import chungNhan3 from "../assets/chung-nhan3.png"
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="info-coach">
          <div className="info-1">
            <div className="news">
              <p>Tin tức</p>
              <a href="#">
                Xe Limousine – Đẳng cấp hạng thương gia thời đại mới
              </a>
              <a href="#">
                Tổng quan các bến xe Vũng Tàu – Giới thiệu thông tin lịch trình
                nhà xe
              </a>
              <a href="#"> Top 31 nhà xe limousine, xe giường nằm đi Đà Lạt </a>
            </div>

            <div className="roads">
              <p>Tuyến đường</p>
              <a href="#"> Xe đi Buôn Mê Thuột từ Sài Gòn </a>
              <a href="#"> Xe đi Vũng Tàu từ Sài Gòn </a>
              <a href="#"> Xe đi Nha Trang từ Sài Gòn </a>
              <a href="#"> Xe đi Đà Lạt từ Sài Gòn </a>
              <a href="#"> Xe đi Sapa từ Hà Nội </a>
              <a href="#"> Xe đi Hải Phòng từ Hà Nội </a>
              <a href="#"> Xe đi Vinh từ Hà Nội </a>
            </div>

            <div className="limousine">
              <p>Xe Limousine</p>
              <a href="#"> Xe Limousine đi Đà Lạt từ Sài Gòn </a>
              <a href="#"> Xe Limousine đi Vũng Tàu từ Sài Gòn </a>
              <a href="#"> Xe Limousine đi Nha Trang từ Sài Gòn </a>
              <a href="#"> Xe Limousine đi Hải Phòng từ Hà Nội </a>
              <a href="#"> Xe Limousine đi Hạ Long từ Hà Nội </a>
              <a href="#"> Xe Limousine đi Sapa Từ Hà Nội </a>
              <a href="#"> Xe Limousine đi Quảng Ninh từ Hà Nội </a>
            </div>
          </div>

          <div className="info-2">
            <div className="bus-station">
              <p>Bến xe</p>
              <a href="#"> Bến xe Miền Đông </a>
              <a href="#"> Bến xe Trung tâm Đà Nẵng </a>
              <a href="#"> Bến xe Gia Lâm </a>
              <a href="#"> Bến xe Mỹ Đình </a>
              <a href="#"> Bến xe An Sương </a>
              <a href="#"> Bến xe Nước Ngầm </a>
              <a href="#"> Bến xe Miền Tây </a>
            </div>

            <div className="list-title-coach">
              <div className="coach">
                <p>Nhà xe</p>

                <a href="#"> Xe Sao Việt </a>
                <a href="#"> Xe Hoa Mai </a>
                <a href="#"> Xe Hạ Long Travel </a>
                <a href="#"> Xe Quốc Đạt </a>
                <a href="#"> Xe Thanh Bình Xanh </a>
                <a href="#"> Xe Thiện Thành limousine </a>
                <a href="#"> Xe Hồng Sơn Phú Yên </a>
                <a href="#"> Xe Tiến Oanh </a>
              </div>

              <div className="coach">
                <a href="#"> Xe Hải Âu </a>
                <a href="#"> Xe Chín Nghĩa </a>
                <a href="#"> Xe Hưng Long </a>
                <a href="#"> Xe Kim Mạnh Hùng </a>
                <a href="#"> Xe Tuấn Hưng </a>
                <a href="#"> Xe Khanh Phong </a>
                <a href="#"> Xe An Anh (Quê Hương) </a>
                <a href="#"> Xe Minh Quốc </a>
              </div>

              <div className="coach">
                <a href="#"> Xe Văn Minh </a>
                <a href="#"> Xe Anh Tuyên </a>
                <a href="#"> Xe Điền Linh </a>
                <a href="#"> Xe Hạnh Cafe </a>
                <a href="#"> Xe Tuấn Nga </a>
                <a href="#"> Xe Ngọc Ánh Sài Gòn </a>
                <a href="#"> Xe Hùng Cường </a>
                <a href="#"> Xe Thuận Tiến </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="about-us">
            <p>Về Chúng Tôi</p>

            <a href="#"> Giới Thiệu Vivutoday </a>
            <a href="#"> Liên Hệ </a>
            <a href="#"> Giá trị cốt lõi </a>
          </div>

          <div className="about-us">
            <p>Hỗ Trợ</p>

            <a href="#"> Chính sách bảo mật </a>
            <a href="#"> Chính sách điều khoản và giao dịch chung </a>
            <a href="#"> Chính sách đổi trả và hoàn tiền </a>
            <a href="#"> Chính sách thanh toán </a>
            <a href="#"> Quy chế hoạt động </a>
          </div>

          <div className="about-us">
            <p>Liên hệ</p>

            <div className="item-phone">
              <p className="p-1">Hotline: <strong>1900 0152</strong></p>
              <p className="p-2">(Cước phí: 3.000 đồng/phút)</p>
            </div>

            <div className="item-phone">
              <p className="p-1">Hotline: <strong>1900.996.678</strong></p>
              <p className="p-2">(Cước phí: 1.000 đồng/phút)</p>
            </div>

            <div className="item-phone">
              <p className="p-1">Hotline: <strong>1900.0179</strong></p>
              <p className="p-2">
                Cước phí: 8.000 đồng/phút(dịch Vụ đặt vé nhanh 24/7)
              </p>
            </div>
          </div>

          <div className="about-us">
            <p>Chứng nhận</p>

            <img className="img1" src={chungNhan1} alt="cn1" />
            <img className="img2" src={chungNhan2} alt="cn2" />
            <img className="img3" src={chungNhan3} alt="cn3" />
          </div>
        </div>
      </footer>
    </div>
  )
}
