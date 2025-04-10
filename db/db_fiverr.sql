CREATE TABLE NguoiDung (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    pass_word VARCHAR(255),
    phone VARCHAR(15),
    birth_day DATE,
    gender VARCHAR(10),
    role VARCHAR(50),
    skill VARCHAR(255),
    certification VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE LoaiCongViec (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten_loai_cong_viec VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE ChiTietLoaiCongViec (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten_chi_tiet VARCHAR(255),
    hinh_anh VARCHAR(255),
    ma_loai_cong_viec INT,
    FOREIGN KEY (ma_loai_cong_viec) REFERENCES LoaiCongViec(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE CongViec (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten_cong_viec VARCHAR(255),
    danh_gia INT,
    gia_tien INT,
    hinh_anh VARCHAR(255),
    mo_ta TEXT,
    mo_ta_ngan VARCHAR(255),
    sao_cong_viec INT,
    ma_chi_tiet_loai INT,
    nguoi_tao INT,
    FOREIGN KEY (ma_chi_tiet_loai) REFERENCES ChiTietLoaiCongViec(id),
    FOREIGN KEY (nguoi_tao) REFERENCES NguoiDung(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE ThueCongViec (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ma_cong_viec INT,
    ma_ngoi_thue INT,
    ngay_thue DATETIME,
    hoan_thanh BOOLEAN,
    FOREIGN KEY (ma_cong_viec) REFERENCES CongViec(id),
    FOREIGN KEY (ma_ngoi_thue) REFERENCES NguoiDung(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE BinhLuan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ma_cong_viec INT,
    ma_ngoi_binh_luan INT,
    ngay_binh_luan DATETIME,
    noi_dung TEXT,
    sao_binh_luan INT,
    FOREIGN KEY (ma_cong_viec) REFERENCES CongViec(id),
    FOREIGN KEY (ma_ngoi_binh_luan) REFERENCES NguoiDung(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE Permission (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(50),  -- ROLE: 'admin', 'user'
    table_name VARCHAR(50),  -- Tên bảng như 'NguoiDung', 'LoaiCongViec', ...
    can_create BOOLEAN DEFAULT FALSE,  -- Quyền CREATE
    can_read BOOLEAN DEFAULT FALSE,    -- Quyền READ
    can_update BOOLEAN DEFAULT FALSE,  -- Quyền UPDATE
    can_delete BOOLEAN DEFAULT FALSE,  -- Quyền DELETE
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- thêm thông tin loại công việc
INSERT INTO LoaiCongViec (id, ten_loai_cong_viec) VALUES
(1, 'Graphics & Design'),
(2, 'Digital Marketing'),
(3, 'Writing & Translation'),
(4, 'Video & Animation'),
(5, 'Music & Audio'),
(1594, 'Business');
-- thêm thông tin người dùng
INSERT INTO NguoiDung (id, name, email, pass_word, phone, birth_day, gender, role, skill, certification)
VALUES
(1, 'Admin User 1', 'admin1@example.com', 'password123', '1112233445', '1985-08-10', true, 'ADMIN', '["JavaScript", "Node.js"]', '["AWS Certified"]'),
(2, 'Admin User 2', 'admin2@example.com', 'password123', '2233445566', '1990-07-22', true, 'ADMIN', '["React", "Python"]', '["Google Developer"]'),
(3, 'Admin User 3', 'admin3@example.com', 'password123', '3344556677', '1992-12-15', true, 'ADMIN', '["CSS", "HTML", "Java"]', '["CyberSoft Certified"]'),
(4, 'User 1', 'user1@example.com', 'password123', '0987654321', '1995-05-14', true, 'USER', '["HTML", "CSS", "JavaScript"]', '[]'),
(5, 'User 2', 'user2@example.com', 'password123', '0912345678', '1994-11-01', false, 'USER', '["Java", "Python"]', '[]'),
(6, 'User 3', 'user3@example.com', 'password123', '0919876543', '1997-03-03', true, 'USER', '["React", "Node.js"]', '[]'),
(7, 'User 4', 'user4@example.com', 'password123', '0923456789', '1998-02-25', false, 'USER', '["PHP", "MySQL"]', '[]'),
(8, 'User 5', 'user5@example.com', 'password123', '0934567890', '1996-04-30', true, 'USER', '["Ruby", "Rails"]', '[]'),
(9, 'User 6', 'user6@example.com', 'password123', '0945678901', '2000-01-15', true, 'USER', '["Vue.js", "JavaScript"]', '[]'),
(10, 'User 7', 'user7@example.com', 'password123', '0956789012', '2001-07-22', false, 'USER', '["Go", "GraphQL"]', '[]'),
(11, 'User 8', 'user8@example.com', 'password123', '0967890123', '1993-10-10', true, 'USER', '["JavaScript", "Vue.js"]', '[]'),
(12, 'User 9', 'user9@example.com', 'password123', '0978901234', '1999-03-29', false, 'USER', '["HTML", "CSS", "React"]', '[]'),
(13, 'User 10', 'user10@example.com', 'password123', '0989012345', '1997-08-05', true, 'USER', '["Node.js", "Express"]', '[]'),
(14, 'User 11', 'user11@example.com', 'password123', '0990123456', '1995-09-11', true, 'USER', '["Angular", "TypeScript"]', '[]'),
(15, 'User 12', 'user12@example.com', 'password123', '0911122334', '1994-06-23', false, 'USER', '["Python", "Django"]', '[]'),
(16, 'User 13', 'user13@example.com', 'password123', '0922233445', '1996-01-17', true, 'USER', '["C#", "ASP.NET"]', '[]'),
(17, 'User 14', 'user14@example.com', 'password123', '0933344556', '1993-12-08', false, 'USER', '["Swift", "iOS"]', '[]'),
(18, 'User 15', 'user15@example.com', 'password123', '0944455667', '2000-04-02', true, 'USER', '["JavaScript", "Vue.js"]', '[]'),
(19, 'User 16', 'user16@example.com', 'password123', '0955566778', '1997-09-20', true, 'USER', '["Java", "Spring Boot"]', '[]'),
(20, 'User 17', 'user17@example.com', 'password123', '0966677889', '1999-11-25', false, 'USER', '["SQL", "NoSQL"]', '[]');
-- thêm chi tiết loại công việc
INSERT INTO ChiTietLoaiCongViec (ten_chi_tiet, hinh_anh, ma_loai_cong_viec)
VALUES
('Web Developer', 'https://fiverrnew.cybersoft.edu.vn/images/lcv1.jpg', 1),
('Graphic Designer', 'https://fiverrnew.cybersoft.edu.vn/images/lcv2.jpg', 2),
('Product Manager', 'https://fiverrnew.cybersoft.edu.vn/images/lcv3.jpg', 3),
('Event Planner', 'https://fiverrnew.cybersoft.edu.vn/images/lcv4.jpg', 4),
('IT Support Specialist', 'https://fiverrnew.cybersoft.edu.vn/images/lcv5.jpg', 5),
('SEO Specialist', 'http://example.com/seo.jpg', 1),
('Social Media Manager', 'http://example.com/socialmedia.jpg', 2),
('Marketing Specialist', 'http://example.com/marketing.jpg', 3),
('UX/UI Designer', 'http://example.com/uxui.jpg', 4),
('Data Analyst', 'http://example.com/dataanalyst.jpg', 5);

-- thêm công việc
INSERT INTO CongViec (ten_cong_viec, danh_gia, gia_tien, hinh_anh, mo_ta, mo_ta_ngan, sao_cong_viec, ma_chi_tiet_loai, nguoi_tao)
VALUES
('Web Developer', 4, 150000, 'http://fiverrnew.cybersoft.edu.vn/images/29-06-2024-01-30-12-depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg', 'Phát triển và bảo trì các trang web. Lập trình bằng HTML, CSS, JavaScript và các framework như React.', 'Lập trình web chuyên nghiệp', 5, 1, 1),
('Graphic Designer', 5, 120000, 'http://fiverrnew.cybersoft.edu.vn/images/12-10-2024-10-44-11-pexels-picjumbo-com-55570-196645.jpg', 'Thiết kế đồ họa cho các chiến dịch marketing, logo, banner, quảng cáo...', 'Thiết kế đồ họa sáng tạo', 5, 2, 2),
('Digital Marketing Expert', 4, 200000, 'https://fiverrnew.cybersoft.edu.vn/images/lcv4.jpg', 'Quản lý chiến dịch quảng cáo trên Google, Facebook, Instagram...', 'Chuyên gia marketing kỹ thuật số', 4, 3, 3),
('Content Writer', 4, 100000, 'https://fiverrnew.cybersoft.edu.vn/images/lcv7.jpg', 'Viết bài cho blog, website, và các nền tảng truyền thông xã hội.', 'Viết nội dung chất lượng', 4, 4, 4),
('SEO Specialist', 4, 110000, 'http://example.com/img5.jpg', 'Tối ưu hóa công cụ tìm kiếm cho các website và blog.', 'Tối ưu hóa SEO cho website', 4, 5, 5),
('Mobile App Developer', 5, 180000, 'http://example.com/img6.jpg', 'Phát triển ứng dụng di động cho các nền tảng iOS và Android.', 'Phát triển ứng dụng di động', 5, 6, 6),
('Social Media Manager', 3, 130000, 'http://example.com/img7.jpg', 'Quản lý và phát triển các tài khoản mạng xã hội của công ty.', 'Quản lý mạng xã hội cho thương hiệu', 3, 7, 7),
('Video Editor', 4, 140000, 'http://example.com/img8.jpg', 'Chỉnh sửa video, dựng phim cho các chiến dịch quảng cáo.', 'Dịch vụ chỉnh sửa video chuyên nghiệp', 4, 8, 8),
('Email Marketing Specialist', 4, 110000, 'http://example.com/img9.jpg', 'Tạo và quản lý chiến dịch email marketing cho doanh nghiệp.', 'Chuyên gia marketing qua email', 4, 9, 9),
('Customer Service Representative', 3, 80000, 'http://example.com/img10.jpg', 'Hỗ trợ khách hàng qua điện thoại và email, giải quyết khiếu nại.', 'Dịch vụ khách hàng chuyên nghiệp', 3, 10, 10),
('Data Analyst', 5, 160000, 'http://example.com/img11.jpg', 'Phân tích dữ liệu và đưa ra các báo cáo chi tiết cho doanh nghiệp.', 'Chuyên gia phân tích dữ liệu', 5, 10, 11),
('Copywriter', 4, 90000, 'http://example.com/img12.jpg', 'Viết quảng cáo, content cho các chiến dịch marketing online.', 'Viết bài quảng cáo sáng tạo', 4, 9, 12),
('UI/UX Designer', 5, 170000, 'http://example.com/img13.jpg', 'Thiết kế giao diện người dùng và trải nghiệm người dùng cho các sản phẩm phần mềm.', 'Thiết kế UI/UX chuyên nghiệp', 5, 8, 13),
('Translator', 4, 70000, 'http://example.com/img14.jpg', 'Dịch thuật các tài liệu từ tiếng Anh sang tiếng Việt và ngược lại.', 'Dịch thuật tài liệu chính xác', 4, 6, 14),
('Photographer', 4, 120000, 'http://example.com/img15.jpg', 'Chụp hình cho các sự kiện, sản phẩm, và dịch vụ của công ty.', 'Dịch vụ chụp ảnh sự kiện', 4, 1, 15),
('Accountant', 3, 130000, 'http://example.com/img16.jpg', 'Quản lý các báo cáo tài chính và thuế cho doanh nghiệp.', 'Quản lý tài chính và kế toán', 3, 2, 16),
('HR Specialist', 3, 110000, 'http://example.com/img17.jpg', 'Quản lý tuyển dụng, hồ sơ nhân viên và các vấn đề liên quan đến nhân sự.', 'Chuyên gia nhân sự', 3, 3, 17),
('Product Manager', 5, 190000, 'http://example.com/img18.jpg', 'Quản lý và phát triển các sản phẩm mới cho công ty.', 'Quản lý sản phẩm và phát triển', 5, 10, 18),
('Event Planner', 4, 100000, 'http://example.com/img19.jpg', 'Lên kế hoạch và tổ chức các sự kiện cho công ty hoặc khách hàng.', 'Dịch vụ tổ chức sự kiện', 4, 7, 19),
('IT Support Specialist', 4, 90000, 'http://example.com/img20.jpg', 'Cung cấp hỗ trợ kỹ thuật và giải quyết các sự cố IT cho doanh nghiệp.', 'Hỗ trợ kỹ thuật IT', 4, 5, 20);

-- bình luận

INSERT INTO BinhLuan (ma_cong_viec, ma_ngoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan)
VALUES
(40, 5, NOW(), 'Công việc rất tuyệt vời, giao diện dễ sử dụng!', 5),
(22, 6, NOW(), 'Sản phẩm chất lượng tốt, sẽ sử dụng lại lần sau.', 4),
(23, 7, NOW(), 'Tôi không hài lòng với kết quả, mong được cải thiện.', 2),
(24, 8, NOW(), 'Dịch vụ rất chuyên nghiệp và thân thiện.', 5),
(25, 9, NOW(), 'Tôi thấy công việc này rất có ích, đáng giá tiền.', 4),
(26, 10, NOW(), 'Rất nhanh chóng, nhưng cần cải thiện chất lượng một chút.', 3),
(27, 11, NOW(), 'Nhân viên rất tận tâm, tôi sẽ tiếp tục hợp tác.', 5),
(28, 12, NOW(), 'Quá tuyệt vời, sẽ giới thiệu cho bạn bè.', 5),
(29, 13, NOW(), 'Thời gian giao hàng lâu, hy vọng lần sau tốt hơn.', 3),
(30, 14, NOW(), 'Chất lượng công việc rất cao, tôi rất hài lòng.', 5),
(31, 15, NOW(), 'Giá cả hợp lý, nhưng dịch vụ chưa hoàn hảo lắm.', 3),
(32, 16, NOW(), 'Không đáng giá tiền, sẽ không sử dụng nữa.', 1),
(33, 17, NOW(), 'Dịch vụ tốt, tôi rất hài lòng với kết quả.', 4),
(34, 18, NOW(), 'Cần cải thiện giao diện người dùng để dễ sử dụng hơn.', 3),
(35, 19, NOW(), 'Cảm ơn bạn đã giúp tôi hoàn thành dự án, thật tuyệt vời!', 5),
(36, 20, NOW(), 'Nhân viên rất chuyên nghiệp, sẽ quay lại trong tương lai.', 4),
(37, 11, NOW(), 'Đây là một trong những công việc tốt nhất tôi đã làm.', 5),
(38, 12, NOW(), 'Công việc hoàn thành tốt, nhưng cần cải thiện thời gian giao hàng.', 3),
(39, 13, NOW(), 'Chất lượng tốt, nhưng giá hơi cao so với tôi.', 4),
(41, 14, NOW(), 'Dịch vụ rất chuyên nghiệp, tôi cảm thấy rất hài lòng.', 5);
-- thuê công việc 
INSERT INTO ThueCongViec (ma_cong_viec, ma_ngoi_thue, ngay_thue, hoan_thanh)
VALUES
(31, 5, '2025-04-01 10:00:00', true),
(32, 6, '2025-04-01 12:00:00', false),
(33, 7, '2025-04-02 14:30:00', true),
(34, 8, '2025-04-03 09:15:00', false),
(35, 9, '2025-04-03 16:45:00', true),
(36, 10, '2025-04-04 11:00:00', false),
(37, 11, '2025-04-05 08:00:00', true),
(38, 12, '2025-04-06 13:30:00', false),
(39, 13, '2025-04-07 15:00:00', true),
(40, 14, '2025-04-08 17:00:00', false);
-- permission
-- Thêm quyền cho Admin
INSERT INTO Permission (role, table_name, can_create, can_read, can_update, can_delete)
VALUES
('ADMIN', 'NguoiDung', true, true, true, true),   -- Admin có quyền CRUD trên bảng NguoiDung
('ADMIN', 'LoaiCongViec', true, true, true, true), -- Admin có quyền CRUD trên bảng LoaiCongViec
('ADMIN', 'ChiTietLoaiCongViec', true, true, true, true), -- Admin có quyền CRUD trên bảng ChiTietLoaiCongViec
('ADMIN', 'CongViec', true, true, true, true),   -- Admin có quyền CRUD trên bảng CongViec
('ADMIN', 'ThueCongViec', true, true, true, true),   -- Admin có quyền CRUD trên bảng ThueCongViec
('ADMIN', 'BinhLuan', true, true, true, true);   -- Admin có quyền CRUD trên bảng BinhLuan

-- Thêm quyền cho User
INSERT INTO Permission (role, table_name, can_create, can_read, can_update, can_delete)
VALUES
('USER', 'NguoiDung', false, true, false, false),   -- User chỉ có quyền READ trên bảng NguoiDung
('USER', 'LoaiCongViec', false, true, false, false),  -- User chỉ có quyền READ trên bảng LoaiCongViec
('USER', 'ChiTietLoaiCongViec', false, true, false, false), -- User chỉ có quyền READ trên bảng ChiTietLoaiCongViec
('USER', 'CongViec', false, true, false, false),  -- User chỉ có quyền READ trên bảng CongViec
('USER', 'ThueCongViec', false, true, false, false),  -- User chỉ có quyền READ trên bảng ThueCongViec
('USER', 'BinhLuan', true, true, false, false);  -- User có quyền POST READ trên bảng BinhLuan, nhưng không được sửa hay xóa


