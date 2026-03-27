module.exports = {
  meta: {
    grade: 6,
    title: 'Lịch sử 6',
    subtitle: 'Kết nối tri thức với cuộc sống',
    totalLessons: 20,
    totalChapters: 5,
    color: '#ff7a1a'
  },

  chapters: [
    {
      id: 'chuong-1',
      number: 1,
      title: 'Vì sao phải học lịch sử?',
      icon: '📖',
      color: '#e96508',
      summary: 'Khám phá ý nghĩa của môn lịch sử, cách các nhà sử học tìm hiểu quá khứ và cách tính thời gian trong lịch sử.',
      lessons: [
        {
          id: 'bai-1',
          number: 1,
          title: 'Lịch sử và cuộc sống',
          mindmap: {
            center: 'Lịch sử và cuộc sống',
            branches: [
              {
                label: 'Lịch sử là gì?',
                color: '#e96508',
                children: ['Những gì đã xảy ra trong quá khứ', 'Môn khoa học nghiên cứu quá khứ', 'Ghi lại hoạt động của con người']
              },
              {
                label: 'Vì sao phải học?',
                color: '#ff7a1a',
                children: ['Hiểu nguồn gốc dân tộc', 'Rút ra bài học kinh nghiệm', 'Bồi dưỡng lòng yêu nước']
              },
              {
                label: 'Lịch sử quanh ta',
                color: '#bf4f04',
                children: ['Di tích lịch sử', 'Phong tục tập quán', 'Công trình kiến trúc cổ']
              }
            ]
          }
        },
        {
          id: 'bai-2',
          number: 2,
          title: 'Dựa vào đâu để biết và phục dựng lại lịch sử?',
          pdf: '/pdfs/lop6/bai2.pdf',
          infographic: '/images/lop6/bai2-infographic.png',
          mindmap: {
            center: 'Tư liệu lịch sử',
            branches: [
              {
                label: 'Tư liệu hiện vật',
                color: '#e96508',
                children: ['Công cụ đồ đá', 'Đồ gốm, đồng', 'Di tích, lăng mộ']
              },
              {
                label: 'Tư liệu chữ viết',
                color: '#ff7a1a',
                children: ['Sách sử', 'Văn bia', 'Châu bản, thư tịch']
              },
              {
                label: 'Tư liệu truyền miệng',
                color: '#bf4f04',
                children: ['Thần thoại, truyền thuyết', 'Ca dao, dân ca', 'Lễ hội dân gian']
              },
              {
                label: 'Tư liệu gốc',
                color: '#994000',
                children: ['Đáng tin cậy nhất', 'Được tạo ra đúng thời điểm', 'Ví dụ: bản tuyên ngôn gốc']
              }
            ]
          }
        },
        {
          id: 'bai-3',
          number: 3,
          title: 'Thời gian trong lịch sử',
          pdf: '/pdfs/lop6/bai3.pdf',
          infographic: '/images/lop6/bai3-infographic.png',
          mindmap: {
            center: 'Thời gian lịch sử',
            branches: [
              {
                label: 'Cách tính thời gian',
                color: '#e96508',
                children: ['Dương lịch (Công lịch)', 'Âm lịch', 'Âm dương lịch']
              },
              {
                label: 'Các khái niệm',
                color: '#ff7a1a',
                children: ['Thế kỷ = 100 năm', 'Thiên niên kỷ = 1000 năm', 'Trước CN và Sau CN']
              },
              {
                label: 'Trục thời gian',
                color: '#bf4f04',
                children: ['Đọc từ trái sang phải', 'TCN đếm ngược về 0', 'SCN đếm xuôi từ 0']
              }
            ]
          }
        }
      ]
    },

    {
      id: 'chuong-2',
      number: 2,
      title: 'Xã hội nguyên thuỷ',
      icon: '🦴',
      color: '#bf4f04',
      summary: 'Tìm hiểu về nguồn gốc loài người, đời sống xã hội nguyên thuỷ và quá trình chuyển biến sang xã hội có giai cấp.',
      lessons: [
        {
          id: 'bai-4',
          number: 4,
          title: 'Nguồn gốc loài người',
          pdf: '/pdfs/lop6/bai4.pdf',
          infographic: '/images/lop6/bai4-infographic.png',
          mindmap: {
            center: 'Nguồn gốc loài người',
            branches: [
              {
                label: 'Vượn người',
                color: '#bf4f04',
                children: ['Xuất hiện cách đây 5-6 triệu năm', 'Sống trên cây', 'Dùng 4 chi di chuyển']
              },
              {
                label: 'Người tối cổ (Homo habilis)',
                color: '#994000',
                children: ['Cách đây ~4 triệu năm', 'Đi thẳng bằng 2 chân', 'Biết dùng đồ đá thô sơ']
              },
              {
                label: 'Người tinh khôn (Homo sapiens)',
                color: '#e96508',
                children: ['Cách đây ~15 vạn năm', 'Não phát triển hơn', 'Cấu tạo giống người hiện đại']
              },
              {
                label: 'Nơi xuất hiện',
                color: '#ff7a1a',
                children: ['Châu Phi (cái nôi)', 'Dần lan ra toàn thế giới', 'Di chỉ ở Đông Nam Á']
              }
            ]
          }
        },
        {
          id: 'bai-5',
          number: 5,
          title: 'Xã hội nguyên thuỷ',
          pdf: '/pdfs/lop6/bai5.pdf',
          infographic: '/images/lop6/bai5-infographic.png',
          mindmap: {
            center: 'Xã hội nguyên thuỷ',
            branches: [
              {
                label: 'Bầy người nguyên thuỷ',
                color: '#bf4f04',
                children: ['Sống thành bầy đàn', 'Hái lượm, săn bắt', 'Chưa có gia đình riêng']
              },
              {
                label: 'Thị tộc – Bộ lạc',
                color: '#994000',
                children: ['Có quan hệ huyết thống', 'Bầu thủ lĩnh', 'Tài sản chung']
              },
              {
                label: 'Đời sống vật chất',
                color: '#e96508',
                children: ['Chế tác công cụ đá', 'Biết dùng lửa', 'Trồng trọt, chăn nuôi sơ khai']
              },
              {
                label: 'Đời sống tinh thần',
                color: '#ff7a1a',
                children: ['Vẽ trên vách hang', 'Tín ngưỡng nguyên thuỷ', 'Nhạc cụ thô sơ']
              }
            ]
          }
        },
        {
          id: 'bai-6',
          number: 6,
          title: 'Sự chuyển biến và phân hoá của xã hội nguyên thuỷ',
          pdf: '/pdfs/lop6/bai6.pdf',
          infographic: '/images/lop6/bai6-infographic.png',
          mindmap: {
            center: 'Chuyển biến xã hội',
            branches: [
              {
                label: 'Nguyên nhân',
                color: '#bf4f04',
                children: ['Công cụ kim loại ra đời', 'Năng suất lao động tăng', 'Của cải dư thừa']
              },
              {
                label: 'Phân hoá xã hội',
                color: '#994000',
                children: ['Giàu – nghèo phân hoá', 'Chế độ tư hữu hình thành', 'Bất bình đẳng xuất hiện']
              },
              {
                label: 'Hệ quả',
                color: '#e96508',
                children: ['Xã hội có giai cấp ra đời', 'Nhà nước sơ khai hình thành', 'Kết thúc nguyên thuỷ']
              }
            ]
          }
        }
      ]
    },

    {
      id: 'chuong-3',
      number: 3,
      title: 'Xã hội cổ đại',
      icon: '🏛️',
      color: '#994000',
      summary: 'Khám phá các nền văn minh lớn của thế giới cổ đại: Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc, Hy Lạp và La Mã.',
      lessons: [
        {
          id: 'bai-7',
          number: 7,
          title: 'Ai Cập và Lưỡng Hà cổ đại',
          pdf: '/pdfs/lop6/bai7.pdf',
          infographic: '/images/lop6/bai7-infographic.png',
          mindmap: {
            center: 'Văn minh cổ đại',
            branches: [
              {
                label: 'Ai Cập cổ đại',
                color: '#994000',
                children: ['Bên bờ sông Nile', 'Kim tự tháp hùng vĩ', 'Chữ tượng hình']
              },
              {
                label: 'Lưỡng Hà cổ đại',
                color: '#bf4f04',
                children: ['Giữa sông Tigris & Euphrates', 'Luật Hammurabi', 'Chữ hình nêm']
              },
              {
                label: 'Kinh tế',
                color: '#e96508',
                children: ['Nông nghiệp sông Nile', 'Thủ công nghiệp phát triển', 'Buôn bán với nước ngoài']
              },
              {
                label: 'Thành tựu',
                color: '#ff7a1a',
                children: ['Toán học, thiên văn', 'Lịch (365 ngày)', 'Y học, kiến trúc']
              }
            ]
          }
        },
        {
          id: 'bai-8',
          number: 8,
          title: 'Ấn Độ cổ đại',
          pdf: '/pdfs/lop6/bai8.pdf',
          infographic: '/images/lop6/bai8-infographic.png',
          mindmap: {
            center: 'Ấn Độ cổ đại',
            branches: [
              {
                label: 'Điều kiện tự nhiên',
                color: '#994000',
                children: ['Bán đảo Nam Á', 'Sông Ấn, sông Hằng', 'Đất đai màu mỡ']
              },
              {
                label: 'Chế độ xã hội',
                color: '#bf4f04',
                children: ['4 đẳng cấp Varna', 'Bà-la-môn (cao nhất)', 'Thủ-đà-la (thấp nhất)']
              },
              {
                label: 'Thành tựu',
                color: '#e96508',
                children: ['Hệ số 0 và chữ số 1-9', 'Đạo Hindu, Phật giáo', 'Sử thi Mahabharata']
              }
            ]
          }
        },
        {
          id: 'bai-9',
          number: 9,
          title: 'Trung Quốc từ thời cổ đại đến thế kỉ VII',
          pdf: '/pdfs/lop6/bai9.pdf',
          infographic: '/images/lop6/bai9-infographic.png',
          mindmap: {
            center: 'Trung Quốc cổ đại',
            branches: [
              {
                label: 'Các triều đại sớm',
                color: '#994000',
                children: ['Hạ – Thương – Chu', 'Tần thống nhất TQ (221 TCN)', 'Hán (206 TCN – 220 SCN)']
              },
              {
                label: 'Kinh tế – Xã hội',
                color: '#bf4f04',
                children: ['Nông nghiệp lúa nước', 'Chế độ phong kiến', 'Con đường tơ lụa']
              },
              {
                label: 'Thành tựu văn hóa',
                color: '#e96508',
                children: ['Chữ tượng hình', 'Tứ đại phát minh', 'Khổng Tử, Đạo giáo']
              },
              {
                label: 'Vạn lý Trường thành',
                color: '#ff7a1a',
                children: ['Xây dời Tần Thủy Hoàng', 'Chống Hung Nô phía bắc', 'Dài hơn 6000 km']
              }
            ]
          }
        },
        {
          id: 'bai-10',
          number: 10,
          title: 'Hy Lạp và La Mã cổ đại',
          pdf: '/pdfs/lop6/bai10.pdf',
          infographic: '/images/lop6/bai10-infographic.png',
          mindmap: {
            center: 'Hy Lạp – La Mã',
            branches: [
              {
                label: 'Hy Lạp cổ đại',
                color: '#994000',
                children: ['Bán đảo Balkan', 'Thành bang Athens & Sparta', 'Dân chủ chiếm hữu nô lệ']
              },
              {
                label: 'La Mã cổ đại',
                color: '#bf4f04',
                children: ['Bán đảo Italy', 'Cộng hoà → Đế chế', 'Luật La Mã']
              },
              {
                label: 'Thành tựu Hy Lạp',
                color: '#e96508',
                children: ['Triết học Socrates, Plato', 'Thế vận hội Olympic', 'Kiến trúc đền Parthenon']
              },
              {
                label: 'Thành tựu La Mã',
                color: '#ff7a1a',
                children: ['Đấu trường Colosseum', 'Hệ thống đường sá', 'Văn học Latin']
              }
            ]
          }
        }
      ]
    },

    {
      id: 'chuong-4',
      number: 4,
      title: 'Đông Nam Á từ những thế kỉ tiếp giáp đầu Công nguyên đến thế kỉ X',
      icon: '🌴',
      color: '#e96508',
      summary: 'Tìm hiểu sự hình thành các quốc gia sơ kỳ, vương quốc phong kiến và giao lưu văn hóa ở Đông Nam Á.',
      lessons: [
        {
          id: 'bai-11',
          number: 11,
          title: 'Các quốc gia sơ kì ở Đông Nam Á',
          pdf: '/pdfs/lop6/bai11.pdf',
          infographic: '/images/lop6/bai11-infographic.png',
          mindmap: {
            center: 'Quốc gia sơ kỳ ĐNA',
            branches: [
              {
                label: 'Điều kiện hình thành',
                color: '#e96508',
                children: ['Địa hình đa dạng', 'Khí hậu nhiệt đới', 'Nông nghiệp lúa nước']
              },
              {
                label: 'Các quốc gia tiêu biểu',
                color: '#ff7a1a',
                children: ['Phù Nam (Nam Bộ)', 'Chăm-pa (miền Trung VN)', 'Óc Eo – trung tâm thương mại']
              },
              {
                label: 'Đặc điểm',
                color: '#bf4f04',
                children: ['Hình thành TK I – VI', 'Chịu ảnh hưởng Ấn Độ', 'Giao thương hàng hải']
              }
            ]
          }
        },
        {
          id: 'bai-12',
          number: 12,
          title: 'Sự hình thành và phát triển của các vương quốc phong kiến ở Đông Nam Á',
          pdf: '/pdfs/lop6/bai12.pdf',
          infographic: '/images/lop6/bai12-infographic.png',
          mindmap: {
            center: 'Vương quốc phong kiến ĐNA',
            branches: [
              {
                label: 'Đại lục ĐNA',
                color: '#e96508',
                children: ['Khmer (Campuchia)', 'Đại Việt (Việt Nam)', 'Pagan (Myanmar)']
              },
              {
                label: 'Hải đảo ĐNA',
                color: '#ff7a1a',
                children: ['Srivijaya (Sumatra)', 'Majapahit (Java)', 'Thương mại biển phát triển']
              },
              {
                label: 'Đặc điểm chung',
                color: '#bf4f04',
                children: ['TK VII – X hình thành', 'Nhà nước trung ương tập quyền', 'Kinh tế nông nghiệp']
              }
            ]
          }
        },
        {
          id: 'bai-13',
          number: 13,
          title: 'Giao lưu văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X',
          pdf: '/pdfs/lop6/bai13.pdf',
          infographic: '/images/lop6/bai13-infographic.png',
          mindmap: {
            center: 'Giao lưu văn hóa ĐNA',
            branches: [
              {
                label: 'Ảnh hưởng Ấn Độ',
                color: '#e96508',
                children: ['Phật giáo, Hindu giáo', 'Chữ Sanskrit', 'Kiến trúc đền tháp']
              },
              {
                label: 'Ảnh hưởng Trung Hoa',
                color: '#ff7a1a',
                children: ['Nho giáo, Đạo giáo', 'Chữ Hán', 'Kỹ thuật canh tác']
              },
              {
                label: 'Bản sắc riêng',
                color: '#bf4f04',
                children: ['Tiếp thu có chọn lọc', 'Kết hợp văn hóa bản địa', 'Tạo nét riêng từng quốc gia']
              }
            ]
          }
        }
      ]
    },

    {
      id: 'chuong-5',
      number: 5,
      title: 'Việt Nam từ khoảng thế kỉ VII trước Công nguyên đến đầu thế kỉ X',
      icon: '🇻🇳',
      color: '#ff7a1a',
      summary: 'Lịch sử Việt Nam thời kỳ dựng nước Văn Lang – Âu Lạc, thời kỳ Bắc thuộc, các cuộc đấu tranh giành độc lập, vương quốc Chăm-pa và Phù Nam.',
      lessons: [
        {
          id: 'bai-14',
          number: 14,
          title: 'Nhà nước Văn Lang – Âu Lạc',
          pdf: '/pdfs/lop6/bai14.pdf',
          infographic: '/images/lop6/bai14-infographic.png',
          mindmap: {
            center: 'Văn Lang – Âu Lạc',
            branches: [
              {
                label: 'Nước Văn Lang',
                color: '#ff7a1a',
                children: ['TK VII TCN', 'Vua Hùng lập nước', 'Trung tâm: Phú Thọ']
              },
              {
                label: 'Nước Âu Lạc',
                color: '#e96508',
                children: ['Thục Phán – An Dương Vương', 'Thủ đô: Cổ Loa', 'Nỏ thần Liên Châu']
              },
              {
                label: 'Đời sống kinh tế',
                color: '#bf4f04',
                children: ['Trồng lúa nước', 'Đúc đồng (Trống đồng Đông Sơn)', 'Đánh cá, chăn nuôi']
              },
              {
                label: 'Đời sống xã hội',
                color: '#994000',
                children: ['Lạc hầu, Lạc tướng', 'Phong tục bánh chưng', 'Tín ngưỡng thờ cúng tổ tiên']
              }
            ]
          }
        },
        {
          id: 'bai-15',
          number: 15,
          title: 'Chính sách cai trị của các triều đại phong kiến phương Bắc',
          pdf: '/pdfs/lop6/bai15.pdf',
          infographic: '/images/lop6/bai15-infographic.png',
          mindmap: {
            center: 'Bắc thuộc (179 TCN – 938)',
            branches: [
              {
                label: 'Chính trị',
                color: '#ff7a1a',
                children: ['Sáp nhập vào lãnh thổ TQ', 'Quan lại TQ cai trị', 'Chia thành quận, huyện']
              },
              {
                label: 'Kinh tế',
                color: '#e96508',
                children: ['Bóc lột nặng nề', 'Cống nạp sản vật quý', 'Độc quyền sắt, muối']
              },
              {
                label: 'Văn hóa',
                color: '#bf4f04',
                children: ['Truyền bá chữ Hán', 'Áp đặt phong tục TQ', 'Đồng hóa dân tộc Việt']
              },
              {
                label: 'Chuyển biến XH',
                color: '#994000',
                children: ['Xuất hiện địa chủ TQ', 'Nông dân bị áp bức', 'Mầm mống đấu tranh']
              }
            ]
          }
        },
        {
          id: 'bai-16',
          number: 16,
          title: 'Các cuộc khởi nghĩa tiêu biểu giành độc lập trước thế kỉ X',
          pdf: '/pdfs/lop6/bai16.pdf',
          infographic: '/images/lop6/bai16-infographic.png',
          mindmap: {
            center: 'Các cuộc khởi nghĩa',
            branches: [
              {
                label: 'Hai Bà Trưng (40–43)',
                color: '#ff7a1a',
                children: ['Trưng Trắc & Trưng Nhị', 'Đánh đuổi Tô Định', 'Xưng vương ở Mê Linh']
              },
              {
                label: 'Bà Triệu (248)',
                color: '#e96508',
                children: ['Triệu Thị Trinh', 'Khởi nghĩa ở Thanh Hoá', '"Không chịu làm tôi người"']
              },
              {
                label: 'Lý Bí – Vạn Xuân (544)',
                color: '#bf4f04',
                children: ['Lý Nam Đế lập nước', 'Quốc hiệu Vạn Xuân', 'Kháng chiến chống Lương']
              },
              {
                label: 'Mai Thúc Loan, Phùng Hưng',
                color: '#994000',
                children: ['Mai Hắc Đế (722)', 'Phùng Hưng – Bố Cái Đại Vương', 'Tiếp nối ý chí độc lập']
              }
            ]
          }
        },
        {
          id: 'bai-17',
          number: 17,
          title: 'Cuộc đấu tranh bảo tồn và phát triển văn hoá dân tộc',
          pdf: '/pdfs/lop6/bai17.pdf',
          infographic: '/images/lop6/bai17-infographic.png',
          mindmap: {
            center: 'Bảo tồn văn hóa Việt',
            branches: [
              {
                label: 'Tiếng Việt',
                color: '#ff7a1a',
                children: ['Vẫn được dùng trong dân gian', 'Bền vững qua ngàn năm', 'Nền tảng bản sắc dân tộc']
              },
              {
                label: 'Phong tục tập quán',
                color: '#e96508',
                children: ['Giữ tục ăn trầu, nhuộm răng', 'Lễ hội đình làng', 'Tín ngưỡng thờ tổ tiên']
              },
              {
                label: 'Tiếp thu có chọn lọc',
                color: '#bf4f04',
                children: ['Học chữ Hán nhưng giữ tiếng Việt', 'Tư tưởng Phật giáo hòa quyện', 'Biến thành văn hóa riêng']
              }
            ]
          }
        },
        {
          id: 'bai-18',
          number: 18,
          title: 'Bước ngoặt lịch sử đầu thế kỉ X',
          pdf: '/pdfs/lop6/bai18.pdf',
          infographic: '/images/lop6/bai18-infographic.png',
          mindmap: {
            center: 'Độc lập TK X',
            branches: [
              {
                label: 'Khúc Thừa Dụ (905)',
                color: '#ff7a1a',
                children: ['Tự lập làm Tiết độ sứ', 'Mở đầu tự chủ', 'Cải cách hành chính']
              },
              {
                label: 'Dương Đình Nghệ (931)',
                color: '#e96508',
                children: ['Đánh đuổi quân Nam Hán', 'Xưng Tiết độ sứ', 'Khôi phục tự chủ']
              },
              {
                label: 'Ngô Quyền (938)',
                color: '#bf4f04',
                children: ['Chiến thắng Bạch Đằng', 'Đánh tan quân Nam Hán', 'Kết thúc 1000 năm Bắc thuộc']
              },
              {
                label: 'Ý nghĩa',
                color: '#994000',
                children: ['Mở ra kỷ nguyên độc lập', 'Biểu tượng ý chí bất khuất', 'Nền tảng nhà nước VN sau này']
              }
            ]
          }
        },
        {
          id: 'bai-19',
          number: 19,
          title: 'Vương quốc Chăm-pa từ thế kỉ II đến thế kỉ X',
          pdf: '/pdfs/lop6/bai19.pdf',
          infographic: '/images/lop6/bai19-infographic.png',
          mindmap: {
            center: 'Vương quốc Chăm-pa',
            branches: [
              {
                label: 'Hình thành',
                color: '#ff7a1a',
                children: ['TK II – dải đất miền Trung', 'Người Chăm (Mã Lai cổ)', 'Ảnh hưởng Ấn Độ sâu sắc']
              },
              {
                label: 'Kinh tế',
                color: '#e96508',
                children: ['Nông nghiệp dùng guồng nước', 'Buôn bán hàng hải', 'Khai thác lâm sản quý']
              },
              {
                label: 'Văn hóa',
                color: '#bf4f04',
                children: ['Chữ Chăm (từ Sanskrit)', 'Tháp Chăm đặc sắc', 'Hindu giáo & Phật giáo']
              },
              {
                label: 'Di sản',
                color: '#994000',
                children: ['Thánh địa Mỹ Sơn (UNESCO)', 'Tháp Bà Ponagar – Nha Trang', 'Văn hóa phong phú']
              }
            ]
          }
        },
        {
          id: 'bai-20',
          number: 20,
          title: 'Vương quốc Phù Nam',
          pdf: '/pdfs/lop6/bai20.pdf',
          infographic: '/images/lop6/bai20-infographic.png',
          mindmap: {
            center: 'Vương quốc Phù Nam',
            branches: [
              {
                label: 'Hình thành',
                color: '#ff7a1a',
                children: ['TK I SCN – Nam Bộ Việt Nam', 'Vùng đồng bằng sông Cửu Long', 'Ảnh hưởng văn hóa Ấn Độ']
              },
              {
                label: 'Kinh tế',
                color: '#e96508',
                children: ['Trung tâm thương mại hàng hải', 'Cảng Óc Eo sầm uất', 'Nông nghiệp & thủ công nghiệp']
              },
              {
                label: 'Chính trị – Xã hội',
                color: '#bf4f04',
                children: ['Nhà nước quân chủ', 'Vua nắm quyền tối cao', 'Phân tầng xã hội rõ rệt']
              },
              {
                label: 'Suy vong',
                color: '#994000',
                children: ['TK VI – VII suy yếu', 'Bị Chân Lạp thôn tính', 'Để lại di tích Óc Eo']
              }
            ]
          }
        }
      ]
    }
  ]
};
