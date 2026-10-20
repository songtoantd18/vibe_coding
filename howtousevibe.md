Bỏ qua tới nội dung
Bụi Code
Tìm bài, prompt, thuật ngữ

Đăng nhập
Trang chủ
Lộ trình
Bài học
Dự án
Thư viện prompt
Checklist
Thuật ngữ
Mẹo 90 giây
Bài tập
Tìm kiếm
Giới thiệu
Liên hệ
Blog
Thử thách tuần
Khoe dự án
Khóa Cơ bản
13/13 bài
Chặng 1. Hiểu đúng Vibe Coding: bạn làm chủ, AI làm thuê

1. Vibe Coding là gì, và không là gì
(đã hoàn thành)
2. Chọn công cụ: chatbot, trợ lý code hay AI Agent
(đã hoàn thành)
Chặng 2. Biến ý tưởng thành kế hoạch rõ ràng

3. Từ ý tưởng đến Project Brief một trang
(đã hoàn thành)
Chặng 3. Giao việc cho AI như giao cho nhân viên giỏi

4. Giao việc cho AI: công thức 5 phần
(đã hoàn thành)
5. Vì sao AI quên và bịa: hiểu về context
(đã hoàn thành)
6. Mở phiên mới mà không mất gì: tóm tắt và quy tắc dự án
(đã hoàn thành)
Chặng 4. Vẽ giao diện để AI code đúng ý

7. Mô tả giao diện để AI làm đúng ý
(đã hoàn thành)
8. Dữ liệu và backend: khi nào cần, dùng Supabase an toàn
(đã hoàn thành)
Chặng 5. Bắt lỗi trước khi khách hàng thấy

9. Debug theo bằng chứng: báo lỗi cho AI đúng cách
(đã hoàn thành)
10. 3 thất bại kinh điển và cách thoát
(đã hoàn thành)
11. Git cho người không code: checkpoint và quay lại
(đã hoàn thành)
Chặng 6. Đưa website lên mạng trong 1 buổi

12. Đưa website lên mạng an toàn
(đã hoàn thành)
13. Prototype hay sản phẩm thật: chấm điểm trước khi cho người khác dùng
(đã hoàn thành)
Trang chủ
Bài học
Khóa Cơ bản
Bài 1
Khóa Cơ bản · Bài 1/13 · Chặng 1 · Hiểu đúng Vibe Coding: bạn làm chủ, AI làm thuê
Vibe Coding là gì, và không là gì
Mới bắt đầu
8 phút đọc
Đã hoàn thành
Hiểu đúng Vibe Coding, phân biệt với AI hỗ trợ code và AI Agent, biết con người phải giữ phần việc nào.

Bạn sẽ làm được
Giải thích Vibe Coding bằng lời của bạn, không thổi phồng.
Phân biệt 4 cách dùng AI khi làm phần mềm.
Nắm vòng lặp mô tả, thực thi, kiểm chứng, phản hồi.
Biết vì sao "AI báo xong" chưa phải là xong.
Vấn đề thật#
Bạn có ý tưởng: một trang giới thiệu dịch vụ, một form đặt lịch, một bảng tính giá cho xưởng. Bạn nghe nói “giờ không cần biết code, cứ bảo AI làm”. Bạn thử. AI ra một giao diện trông rất ổn. Rồi bạn sửa một chữ, nút bấm hỏng. Bạn nhờ AI sửa, nó sửa chỗ này và làm vỡ chỗ khác. Sau hai buổi tối, bạn có một mớ file không dám động vào.

Vấn đề không nằm ở AI kém. Vấn đề là bạn đang dùng AI như máy bán hàng tự động: bỏ yêu cầu vào, chờ sản phẩm rơi ra. Bài này giúp bạn đổi cách nhìn đó.

Định nghĩa#
Vibe Coding là cách làm phần mềm trong đó bạn chủ yếu diễn đạt ý định, mục tiêu và yêu cầu bằng ngôn ngữ tự nhiên (hoặc hình ảnh, bản vẽ), để AI tạo, sửa và hoàn thiện phần mềm qua nhiều vòng phản hồi. Mức độ bạn trực tiếp viết code tùy người và tùy dự án.

Ba chữ cần nhớ: ý định (bạn quyết định làm gì), vòng lặp (không có chuyện một lần là xong), tùy dự án (trang giới thiệu khác xa app có thanh toán).

Thuật ngữ này từ đâu ra#
Andrej Karpathy, một nhà nghiên cứu AI nổi tiếng, dùng cụm “vibe coding” vào đầu tháng 2/2025 để tả kiểu làm phần mềm “cứ theo cảm giác”, nói với AI và chấp nhận code nó viết mà không đọc kỹ. Cụm từ lan rất nhanh và được Collins Dictionary chọn là Từ của năm 2025 (xem nguồn cuối bài).

Lưu ý: ý gốc của Karpathy là cách làm cho dự án chơi, dự án cuối tuần. Khi bạn làm thứ người khác sẽ dùng thật, bạn cần thêm kỷ luật. Bụi Code dạy chính phần kỷ luật đó.

Bốn cách dùng AI khi làm phần mềm#
Cách dùng	Bạn làm gì	AI làm gì	Ví dụ
Tra cứu	Hỏi, tự viết code	Giải thích, gợi ý đoạn ngắn	“Hàm này trong Excel nghĩa là gì?”
AI hỗ trợ code	Viết code là chính	Gợi ý, hoàn thành dòng, sửa lỗi nhỏ	Gợi ý code trong trình soạn thảo
Vibe Coding	Mô tả, xem, phản hồi	Viết phần lớn code	“Làm trang giới thiệu tiệm mộc, có bảng giá”
AI Agent	Giao nhiệm vụ, duyệt kết quả	Tự lên kế hoạch, đọc file, chạy lệnh, sửa nhiều bước	Agent tự tạo dự án, chạy thử, sửa lỗi build
Vibe Coding và AI Agent không phải một. Vibe Coding là cách bạn làm việc. AI Agent là loại công cụ có thể tự thực hiện nhiều bước trong máy hoặc thư mục dự án.

Vì sao agent làm Vibe Coding dễ hơn hẳn#
Chatbot trong khung chat	AI Agent trong thư mục dự án
Không thấy thư mục dự án của bạn	Đọc được cả cây thư mục, hiểu file nào gọi file nào
Bạn tự chép code vào file	Tự tạo file mới, sửa file cũ
Bạn tự chạy lệnh, gặp lỗi đỏ lại chép ngược cho AI	Tự chạy lệnh, thấy lỗi, sửa, chạy lại
Dễ đứt mạch vì chép qua chép lại	Bạn tập trung vào xem kết quả và phản hồi
Bạn vẫn vibe code được bằng chatbot thường cho dự án 1–2 file. Dự án nhiều file thì agent đỡ hẳn việc chép tay và ít lỗi “thiếu ngữ cảnh” hơn. Đổi lại, agent sửa được nhiều file một lúc, nên bắt buộc phải có checkpoint (bài Git).

Vòng lặp cốt lõi#
1. MÔ TẢ      Bạn nói rõ: làm gì, cho ai, giới hạn gì, thế nào là xong
2. THỰC THI   AI lập kế hoạch rồi làm (hoặc bạn bảo nó lập kế hoạch trước)
3. KIỂM CHỨNG Bạn chạy thử, bấm thử, xem trên điện thoại, đối chiếu tiêu chí
4. PHẢN HỒI   Bạn báo đúng chỗ sai, kèm bằng chứng. Quay lại bước 1 hoặc 2
Sao chép
Ví dụ một vòng: trang quán cà phê#
Mô tả (yếu): “Làm trang web cho quán cà phê của tôi, có menu và nút đặt bàn trực quan.” AI phải tự đoán quán bán gì, khách là ai, “trực quan” là sao.

Mô tả (tốt): “Trang một trang cho quán cà phê nhỏ ở Đà Nẵng, khách chủ yếu xem trên điện thoại. Có menu 12 món chia 3 nhóm, mỗi món có tên và giá VNĐ. Nút ‘Đặt bàn’ mở Zalo số [SỐ]. Không cần giỏ hàng, không đăng nhập. Xong khi: xem trên điện thoại không cuộn ngang, giá hiển thị dạng 35.000đ, bấm nút mở đúng Zalo.”

Kiểm chứng: mở trên điện thoại, bấm thử, đối chiếu từng điều kiện “Xong khi”.

Phản hồi chính xác: “Phần menu chưa hiển thị giá rõ ràng: giá đang là 35000, cần định dạng 35.000đ và in đậm. Chỉ sửa khối menu, không đụng phần khác.”

Người mới hay bỏ bước 3. Họ nhìn giao diện thấy đẹp, coi là xong. Phần lớn rắc rối về sau bắt đầu từ đây.

Ai chịu trách nhiệm phần nào#
Việc	Bạn	AI
Quyết định làm gì, cho ai	Chịu trách nhiệm	Gợi ý
Định nghĩa “thế nào là xong”	Chịu trách nhiệm	Giúp viết rõ
Viết code, dựng giao diện	Duyệt	Làm chính
Chạy thử, kiểm tra	Chịu trách nhiệm	Viết test, tự kiểm một phần
Bảo mật, dữ liệu người dùng	Chịu trách nhiệm	Cảnh báo, gợi ý
Quyết định phát hành	Chịu trách nhiệm	Không
Nguyên tắc: AI làm, bạn chịu. Khách hàng không quan tâm lỗi do ai viết.

Vì sao “AI báo xong” không phải bằng chứng#
AI rất hay nói “Tôi đã hoàn thành, mọi thứ hoạt động tốt” trong khi:

Nó chưa chạy thử lần nào.
Nó sửa đúng file nhưng quên file khác dùng chung.
Nó “sửa” test để test qua, thay vì sửa lỗi thật.
Nó tưởng tượng ra một thư viện, một hàm không tồn tại.
Bằng chứng thật là: bạn tự bấm và thấy chạy; ảnh chụp màn hình; kết quả lệnh build không lỗi; checklist nghiệm thu đã tick từng dòng. Tập thói quen hỏi lại AI: “Bạn đã chạy thử chưa? Cho tôi xem lệnh và kết quả.”

Prototype, dùng được, sẵn sàng phát hành#
Mức	Nghĩa là	Ví dụ
Prototype	Chạy được cho bạn xem ý tưởng	Trang demo trên máy bạn
Dùng được	Người quen dùng được, lỗi nhỏ chấp nhận	Form nội bộ cho 5 đồng nghiệp
Sẵn sàng phát hành	Người lạ dùng, có dữ liệu thật, phải an toàn	Trang nhận đơn hàng có thông tin khách
Vibe Coding đưa bạn tới prototype rất nhanh. Từ prototype lên sẵn sàng phát hành mới là phần tốn công: kiểm thử, bảo mật, xử lý lỗi, sao lưu. Đừng nhầm hai mức này.

Giới hạn bạn phải biết#
Lỗi logic: code chạy nhưng tính sai (ví dụ giảm giá áp hai lần).
Bảo mật: AI có thể để lộ khóa API, quên kiểm tra quyền truy cập.
Bảo trì: code AI viết nhanh nhưng có thể rối, lần sau sửa khó.
Ngữ cảnh: AI chỉ biết những gì bạn đưa cho nó; cuộc trò chuyện dài thì nó “quên” phần đầu.
Test thiếu: AI không tự biết bạn cần kiểm những trường hợp nào.
Câu cần nhớ: Vibe Coding không loại bỏ việc hiểu sản phẩm. Nó chuyển phần việc của bạn từ gõ code sang mô tả đúng và kiểm tra đúng.

Lỗi hay gặp#
Gửi một câu prompt cho cả app. “Làm cho tôi app quản lý bán hàng” sẽ ra một thứ trông giống app, không phải app của bạn. Chia nhỏ (xem bài Giao việc cho AI).
Không lưu bản ổn định. AI sửa hỏng, bạn không có đường lui. Học Git hoặc ít nhất sao lưu thư mục (xem bài Git cho người không code).
Bắt đầu bằng dự án khó. Đăng nhập, thanh toán, dữ liệu cá nhân để sau. Bắt đầu với trang tĩnh.
Việc làm ngay#
Lấy một ý tưởng của bạn và trả lời 4 câu, mỗi câu 1–2 dòng:

Ai dùng nó, và họ đang gặp khó gì?
Nó thuộc mức nào: prototype, dùng được, hay sẵn sàng phát hành?
Có dữ liệu cá nhân, tiền, hoặc đăng nhập không? (Nếu có: chưa phải dự án đầu tiên.)
Bạn sẽ kiểm tra thế nào để biết nó chạy đúng?
Giữ câu trả lời. Bài 3 sẽ biến chúng thành Project Brief.

Tóm tắt#
Vibe Coding: bạn mô tả, AI viết, bạn kiểm. Lặp lại.
Khác AI Agent: một bên là cách làm, một bên là loại công cụ.
“AI báo xong” không phải bằng chứng. Tự chạy, tự bấm, đối chiếu tiêu chí.
Prototype nhanh, sản phẩm thật tốn công. Biết mình đang ở mức nào.
Nguồn#
'Vibe coding' named Collins Dictionary's Word of the Year 2025 (News On AIR) (truy cập 16/10/2026)
Collins names vibe coding word of the year 2025 (TechNews) (truy cập 16/10/2026)
Kiểm tra cuối bài
Trả lời đúng 3 câu để mở Bài 2
Sai thì đọc giải thích và làm lại, không giới hạn số lần.

Câu 1. Câu nào mô tả đúng Vibe Coding?

AI viết code thay bạn hoàn toàn, bạn không cần kiểm tra.

Bạn mô tả ý định, AI viết phần lớn code, bạn kiểm chứng và phản hồi qua nhiều vòng.

Là tên một công cụ AI viết code.
Câu 2. Vibe Coding và AI Agent khác nhau thế nào?

Là một thứ, hai cách gọi.

Vibe Coding là cách làm việc; AI Agent là loại công cụ tự thực hiện nhiều bước.

AI Agent chỉ dành cho lập trình viên chuyên nghiệp.
Câu 3. AI báo 'Đã hoàn thành, mọi thứ hoạt động tốt'. Bạn làm gì?

Tin và chuyển sang việc khác.

Tự mở ra bấm thử, đối chiếu tiêu chí, hỏi AI đã chạy thử bằng cách nào.

Bảo AI kiểm tra lại lần nữa.

Tôi đã làm phần Việc làm ngay của bài này với dự án của mình.
Nộp bài
Đã hoàn thành bài này. Bài 2 đã mở.

Sang Bài 2: Chọn công cụ: chatbot, trợ lý code hay AI Agent
Tiến độ lưu trên trình duyệt này. Đổi máy hoặc xóa dữ liệu trình duyệt sẽ mất tiến độ cho tới khi có tài khoản.

Bài này có giúp ích cho bạn không?

👍
Có

👎
Chưa lắm
Cùng ngẫm một câu
Bạn định dùng Vibe Coding làm sản phẩm gì đầu tiên? Viết 2 dòng: ai dùng nó, và bạn sẽ kiểm tra thế nào để biết nó chạy đúng.

Tự trả lời vào NOTES.md của dự án bạn — đó là cách biến bài đọc thành việc làm thật.

Bài tiếp theo →
Chọn công cụ: chatbot, trợ lý code hay AI Agent
Trong bài này
Vấn đề thật
Định nghĩa
Thuật ngữ này từ đâu ra
Bốn cách dùng AI khi làm phần mềm
Vì sao agent làm Vibe Coding dễ hơn hẳn
Vòng lặp cốt lõi
Ví dụ một vòng: trang quán cà phê
Ai chịu trách nhiệm phần nào
Vì sao “AI báo xong” không phải bằng chứng
Prototype, dùng được, sẵn sàng phát hành
Giới hạn bạn phải biết
Lỗi hay gặp
Việc làm ngay
Tóm tắt
Tới bài kiểm tra

© 2026 Bụi Code. Ý tưởng bụi. Sản phẩm thật.
Giới thiệu
Liên hệ
Chính sách riêng tư
Điều khoản
phungnb@gmail.com
Chọn công cụ: chatbot, trợ lý code hay AI Agent
Mới bắt đầu
4 phút đọc
Đã hoàn thành
Ba nhóm công cụ AI để làm sản phẩm, mỗi nhóm hợp với việc gì, và cách chọn cho dự án đầu tiên mà không bị cuốn theo quảng cáo.

Bạn sẽ làm được
Phân biệt 3 nhóm công cụ theo việc chúng làm, không theo tên thương hiệu.
Chọn được công cụ cho dự án đầu tiên dựa trên 4 câu hỏi.
Biết những gì không được đưa vào công cụ AI.
Vấn đề thật#
Mỗi tuần có một công cụ mới “đánh bại tất cả”. Bạn mất cả buổi xem video so sánh, đăng ký ba bản dùng thử, cuối cùng chưa làm được gì. Công cụ đổi liên tục; cách chọn thì không. Bài này dạy cách chọn.

Tên công cụ trong bài chỉ là ví dụ, kiểm tra ngày 16/10/2026. Bụi Code không nhận tài trợ từ công cụ nào, và không ghi giá vì giá đổi thường xuyên. Hãy xem trang giá chính thức trước khi trả tiền.

Ba nhóm công cụ#
1. Chatbot đa năng#
Ví dụ: Claude, ChatGPT, Gemini trên web hoặc app.

Hợp với: hỏi khái niệm, viết brief, lên kế hoạch, tạo file HTML đơn giản, giải thích lỗi.
Điểm yếu: không thấy thư mục dự án của bạn; bạn phải chép code qua lại; dự án nhiều file sẽ rối nhanh.
Dùng khi: bạn đang ở bước nghĩ, hoặc sản phẩm chỉ là 1–2 file.
2. Trình tạo app trên trình duyệt#
Ví dụ: các nền tảng kiểu “mô tả là ra app” như Lovable, Bolt, v0, Replit.

Hợp với: prototype nhanh, landing page, app nhỏ có giao diện; thường có sẵn nút đưa lên mạng.
Điểm yếu: bạn bị gắn với nền tảng; phần phức tạp (dữ liệu, phân quyền) dễ thành hộp đen; chi phí tăng theo lượt dùng.
Dùng khi: cần cho người khác xem ý tưởng thật nhanh, chưa cần sở hữu toàn bộ code.
3. AI Agent làm việc trên máy hoặc kho code#
Ví dụ: Claude Code, Cursor, GitHub Copilot ở chế độ agent, Codex.

Hợp với: dự án nhiều file, cần chạy lệnh, chạy test, sửa lỗi nhiều bước, làm lâu dài.
Điểm yếu: cần cài đặt; phải làm quen với thư mục, terminal (cửa sổ gõ lệnh) ở mức cơ bản; agent có thể sửa nhiều file một lúc nên bắt buộc có Git.
Dùng khi: bạn muốn sở hữu sản phẩm, sửa tiếp nhiều tháng, hoặc dự án đã vượt quá chép-dán.
Chọn bằng 4 câu hỏi#
Câu hỏi	Nếu trả lời…	Nghiêng về
Sản phẩm có mấy file / mấy trang?	1–3 trang tĩnh	Chatbot hoặc trình tạo app
Bạn có cần sửa tiếp lâu dài?	Có, nhiều tháng	Agent + Git
Có dữ liệu người dùng, đăng nhập?	Có	Agent, và cần người có kinh nghiệm duyệt
Bạn cần người khác xem trong hôm nay?	Có	Trình tạo app
Gợi ý cho dự án đầu tiên: một landing page tĩnh, làm bằng chatbot để hiểu từng phần, rồi làm lại bằng agent để thấy khác biệt. Hai lần làm dạy bạn nhiều hơn mười video so sánh.

Thiết lập tối thiểu trước khi bắt đầu#
Một thư mục riêng cho dự án, đặt tên không dấu, không khoảng trắng: tiem-moc-landing.
Một file ghi chú NOTES.md trong thư mục: ghi quyết định, lỗi đã gặp, prompt dùng tốt.
Git (nếu dùng agent): xem bài Git cho người không code.
Trình duyệt có công cụ nhà phát triển (Chrome, Edge, Firefox đều có, bấm F12) để xem lỗi.
Không đưa vào công cụ AI#
Mật khẩu, khóa API (API key), mã OTP, thông tin ngân hàng.
Dữ liệu cá nhân của khách hàng thật (tên, số điện thoại, CCCD). Dùng dữ liệu giả.
Tài liệu mật của công ty khi chưa được phép.
Nếu cần AI làm việc với dữ liệu, tạo dữ liệu mẫu giả giống cấu trúc thật:

Tạo 20 dòng dữ liệu khách hàng GIẢ cho một tiệm mộc, gồm: mã đơn, tên (tên Việt Nam ngẫu nhiên),
sản phẩm (bàn, ghế, kệ, tủ), kích thước (cm), giá (VNĐ), trạng thái (mới, đang làm, đã giao).
Không dùng tên người nổi tiếng hay số điện thoại có thật. Xuất dạng CSV.
Sao chép
Lỗi hay gặp#
Đổi công cụ mỗi khi gặp khó. Lỗi thường nằm ở cách giao việc, không phải công cụ. Đổi công cụ là mất hết ngữ cảnh.
Trả tiền gói cao nhất ngay. Dùng bản miễn phí hoặc gói thấp cho tới khi bạn biết mình thiếu gì.
Tin bảng xếp hạng. Công cụ “tốt nhất” là công cụ bạn dùng thành thạo cho đúng việc.
Việc làm ngay#
Trả lời 4 câu hỏi chọn công cụ cho ý tưởng của bạn.
Chọn một công cụ. Viết lý do chọn vào NOTES.md.
Tạo thư mục dự án và file NOTES.md.
Tóm tắt#
Chọn theo việc cần làm, không theo quảng cáo.
Chatbot để nghĩ và làm nhỏ; trình tạo app để demo nhanh; agent để làm thật và lâu dài.
Không đưa bí mật hay dữ liệu thật vào AI. Dùng dữ liệu giả.

Từ ý tưởng đến Project Brief một trang
MỚI BẮT ĐẦU6 phút đọcĐÃ HOÀN THÀNH
Biến ý tưởng mơ hồ thành một trang brief rõ ràng: ai dùng, làm gì, không làm gì, thế nào là xong. Đây là tài liệu quan trọng nhất bạn đưa cho AI.
BẠN SẼ LÀM ĐƯỢC
•	Viết xong Project Brief một trang cho ý tưởng của bạn.
•	Cắt phạm vi xuống mức MVP làm được trong vài buổi.
•	Viết tiêu chí nghiệm thu kiểm tra được.
Vấn đề thật#
Bạn bảo AI: “Làm website cho tiệm mộc của tôi.” AI phải tự đoán: tiệm bán gì, khách là ai, cần trang nào, màu gì, có đặt hàng không. Nó đoán theo mức trung bình của internet, nên kết quả trông chung chung như mọi website khác.
Brief là cách bạn ngừng để AI đoán. Viết brief mất 30–60 phút. Không viết brief, bạn mất nhiều buổi sửa đi sửa lại.
Brief khác prompt thế nào#
•	Prompt là một lần giao việc: “Làm phần đầu trang”.
•	Brief là bối cảnh chung cho mọi lần giao việc: sản phẩm là gì, cho ai, giới hạn gì.
Bạn viết brief một lần, lưu thành file BRIEF.md trong thư mục dự án, và đưa cho AI ở đầu mỗi phiên làm việc (agent thì tự đọc file).
Mẫu brief 8 mục#
# Project Brief: [Tên dự án]

## 1. Một câu
[Sản phẩm] giúp [ai] [làm được gì] để [kết quả gì].

## 2. Người dùng
- Ai: ...
- Họ đang làm việc này thế nào (khi chưa có sản phẩm): ...
- Điều họ khó chịu nhất: ...

## 3. Việc chính (tối đa 3)
1. ...
2. ...
3. ...

## 4. KHÔNG làm trong bản đầu
- ...

## 5. Trang / màn hình
- ...

## 6. Phong cách
- Cảm giác: ...
- Màu: ...
- Tham khảo: [link] (thích điểm gì, không thích điểm gì)

## 7. Ràng buộc kỹ thuật
- Công cụ: ...
- Dữ liệu: ...
- Có đăng nhập / thanh toán / dữ liệu cá nhân không: ...

## 8. Thế nào là xong (tiêu chí nghiệm thu)
- [ ] ...
- [ ] ...
Sao chép
Viết từng mục cho đúng#
Mục 1: Một câu#
Nếu không viết được một câu, bạn chưa rõ mình làm gì.
•	Yếu: “Website cho tiệm mộc.”
•	Tốt: “Trang giới thiệu giúp khách ở Hà Nội cần đồ gỗ đặt riêng xem mẫu đã làm và gửi yêu cầu báo giá qua Zalo trong dưới 2 phút.”
Mục 3 và 4: Việc chính và việc KHÔNG làm#
Mục 4 quan trọng ngang mục 3. AI rất thích “tặng thêm” tính năng: giỏ hàng, đăng nhập, blog. Mỗi tính năng tặng thêm là một chỗ có thể hỏng. Ghi rõ:
KHÔNG làm trong bản đầu:
- Không giỏ hàng, không thanh toán online.
- Không đăng nhập.
- Không form lưu dữ liệu (dùng nút mở Zalo thay thế).
- Không trang blog.
Sao chép
Mục 6: Phong cách#
“Đẹp, hiện đại” là vô nghĩa với AI. Hãy cho từ cụ thể và tham khảo có lý do:
•	“Mộc, ấm, nhiều ảnh sản phẩm thật, chữ to dễ đọc trên điện thoại.”
•	“Màu chính nâu gỗ óc chó, nền kem, một màu nhấn xanh rêu cho nút.”
•	“Tham khảo site X: thích lưới ảnh; không thích hiệu ứng chuyển động liên tục.”
Mục 8: Tiêu chí nghiệm thu#
Mỗi tiêu chí phải kiểm được bằng cách bấm hoặc nhìn, không cần tranh luận.
Không kiểm được	Kiểm được
Giao diện đẹp	Chữ thân bài ≥ 16px; không có chữ tràn khung ở màn hình 375px
Tải nhanh	Ảnh ≤ 300KB mỗi ảnh; trang chủ hiện nội dung trong 2 giây trên 4G
Dễ liên hệ	Nút “Nhắn Zalo” thấy được ngay màn hình đầu trên điện thoại, bấm mở đúng Zalo
Chuẩn SEO	Mỗi trang có title và description riêng
Cắt phạm vi: luật 3–1–0#
•	3 việc chính, không hơn.
•	1 kiểu người dùng chính cho bản đầu (người khác phục vụ sau).
•	0 tính năng cần đăng nhập, thanh toán hoặc lưu dữ liệu cá nhân, trừ khi đó chính là lý do sản phẩm tồn tại.
Nếu brief của bạn vi phạm luật này, cắt tiếp. Những thứ bị cắt ghi vào mục “Để sau” trong NOTES.md; bạn không mất chúng.
Dùng AI để viết brief (nhưng bạn quyết)#
AI giỏi hỏi và sắp xếp. Bạn giỏi biết sự thật về khách hàng của mình. Dùng prompt sau:
Tôi muốn làm [mô tả ý tưởng trong 2-3 câu].

Hãy giúp tôi viết Project Brief theo 8 mục: Một câu, Người dùng, Việc chính (tối đa 3),
KHÔNG làm trong bản đầu, Trang/màn hình, Phong cách, Ràng buộc kỹ thuật, Tiêu chí nghiệm thu.

Quy tắc:
- Đừng viết ngay. Hỏi tôi tối đa 8 câu, mỗi lần 2 câu, để lấy thông tin còn thiếu.
- Không tự bịa thông tin về khách hàng hay sản phẩm của tôi.
- Đề xuất cắt bớt nếu phạm vi quá lớn cho bản đầu.
- Tiêu chí nghiệm thu phải kiểm tra được bằng cách bấm hoặc nhìn.
Sao chép
Ví dụ brief hoàn chỉnh (rút gọn)#
# Project Brief: Mộc Lâm (landing page)

## 1. Một câu
Trang giới thiệu giúp khách ở Hà Nội cần đồ gỗ đặt riêng xem mẫu đã làm
và gửi yêu cầu báo giá qua Zalo trong dưới 2 phút.

## 2. Người dùng
- Ai: chủ nhà 30-50 tuổi đang sửa nhà, xem trên điện thoại.
- Hiện tại: hỏi người quen, xem Facebook, nhắn nhiều xưởng.
- Khó chịu nhất: không biết xưởng làm đẹp thật không, giá mập mờ.

## 3. Việc chính
1. Xem 9-12 mẫu đã làm, có kích thước và gỗ.
2. Xem khoảng giá tham khảo theo loại sản phẩm.
3. Bấm một nút để nhắn Zalo kèm nội dung soạn sẵn.

## 4. KHÔNG làm
Không giỏ hàng, không đăng nhập, không form lưu dữ liệu, không blog.

## 5. Trang
Một trang dài: Đầu trang, Mẫu đã làm, Bảng giá tham khảo, Quy trình 4 bước, Hỏi đáp, Liên hệ.

## 6. Phong cách
Mộc, ấm, ảnh thật. Nâu óc chó, nền kem, nút xanh rêu. Chữ lớn.

## 7. Ràng buộc
HTML/CSS tĩnh, không backend. Ảnh do chủ tiệm cung cấp. Không dữ liệu cá nhân.

## 8. Xong khi
- [ ] Mở trên điện thoại 375px không tràn chữ, không cuộn ngang.
- [ ] Nút Zalo mở đúng số, có nội dung soạn sẵn.
- [ ] 9 mẫu hiển thị, mỗi mẫu có tên, gỗ, kích thước.
- [ ] Bảng giá ghi rõ "tham khảo, báo giá thật theo bản vẽ".
- [ ] Title, description, ảnh chia sẻ Facebook đúng.
Sao chép
Lỗi hay gặp#
•	Brief dài 10 trang. Không ai đọc, kể cả AI (nó sẽ bỏ sót). Một trang là đủ cho bản đầu.
•	Viết theo giải pháp thay vì vấn đề. “Cần React và database” là quyết định kỹ thuật, để AI đề xuất và bạn duyệt.
•	Không cập nhật brief. Khi đổi ý, sửa brief trước, rồi mới bảo AI sửa code.
Việc làm ngay#
1.	Chép mẫu 8 mục vào file BRIEF.md trong thư mục dự án.
2.	Dùng prompt ở trên để AI hỏi bạn và giúp điền.
3.	Tự đọc lại, áp luật 3–1–0, cắt tiếp nếu cần.
4.	Viết ít nhất 5 tiêu chí nghiệm thu kiểm được.
Tóm tắt#
•	Brief là bối cảnh chung; prompt là từng lần giao việc.
•	Mục “KHÔNG làm” giữ dự án khỏi phình to.
•	Tiêu chí nghiệm thu phải kiểm được bằng cách bấm hoặc nhìn.
•	AI hỏi và sắp xếp, bạn quyết định.
Prompt dùng ngay cho bài này#
•	Phỏng vấn để viết Project Brief: AI hỏi bạn từng câu để rút ý tưởng mơ hồ thành brief 8 mục, không tự bịa thông tin.
Giao việc cho AI: công thức 5 phần
CƠ BẢN6 phút đọcĐÃ HOÀN THÀNH
Cách viết yêu cầu để AI làm đúng ngay từ lần đầu, và cách chia dự án thành lát cắt nhỏ để sửa chỗ này không hỏng chỗ kia.
BẠN SẼ LÀM ĐƯỢC
•	Viết yêu cầu theo công thức 5 phần: Mục tiêu, Bối cảnh, Phạm vi, Ràng buộc, Nghiệm thu.
•	Bắt AI lập kế hoạch và hỏi lại trước khi làm.
•	Chia một dự án thành các lát cắt nhỏ, mỗi lát kiểm được.
Vấn đề thật#
Hai người dùng cùng một công cụ AI. Người thứ nhất nhận code lộn xộn, sửa mãi không xong. Người thứ hai nhận đúng thứ mình cần sau 2–3 vòng. Khác biệt gần như luôn nằm ở cách giao việc, giống như giao việc cho thợ: nói mơ hồ thì nhận sản phẩm mơ hồ.
Công thức 5 phần#
MỤC TIÊU    Làm gì, để làm gì (1-2 câu)
BỐI CẢNH    Dự án là gì, đang ở đâu, file nào liên quan
PHẠM VI     Làm phần nào, KHÔNG đụng phần nào
RÀNG BUỘC   Công nghệ, phong cách, giới hạn phải tuân
NGHIỆM THU  Thế nào là xong, kiểm bằng cách nào
Sao chép
So sánh#
Yêu cầu yếu:
Thêm phần bảng giá vào trang.
Sao chép
Yêu cầu theo công thức:
MỤC TIÊU: Thêm khối "Bảng giá tham khảo" để khách biết khoảng giá trước khi nhắn Zalo.

BỐI CẢNH: Landing page tĩnh của xưởng mộc Mộc Lâm, xem BRIEF.md. File chính index.html,
style trong styles.css. Khối "Mẫu đã làm" đã xong và đang chạy đúng.

PHẠM VI:
- Thêm một section mới ngay sau "Mẫu đã làm".
- KHÔNG sửa header, khối "Mẫu đã làm" và nút Zalo.

RÀNG BUỘC:
- HTML/CSS thuần, không thêm thư viện.
- Dùng các biến màu đã có trong styles.css, không thêm màu mới.
- 4 dòng: Bàn ăn, Tủ áo, Kệ tivi, Giường. Mỗi dòng: tên, gỗ phổ biến, khoảng giá (VNĐ).
- Dưới bảng có dòng: "Giá tham khảo. Báo giá chính xác theo bản vẽ và loại gỗ."
- Giá: dùng chỗ trống [GIÁ] để tôi tự điền, KHÔNG tự bịa giá.

NGHIỆM THU:
- Ở màn hình 375px bảng không làm trang cuộn ngang (bảng tự cuộn riêng hoặc chuyển thành thẻ).
- Phân cấp tiêu đề đúng (h2 cho section).
- Các khối cũ hiển thị y như trước.

Trước khi sửa: liệt kê file sẽ sửa và cách làm, chờ tôi đồng ý.
Sao chép
Yêu cầu thứ hai dài hơn, nhưng tiết kiệm cho bạn 3–4 vòng sửa.
Giao việc đa tầng: thêm tầng dữ liệu mẫu khi cần#
Năm phần trên là các tầng thông tin của một yêu cầu. Người làm nghề gọi cách viết này là giao việc đa tầng (layered prompting) hoặc kỹ thuật ngữ cảnh (context engineering): AI không phải đoán vì mỗi tầng trả lời một câu hỏi nó sẽ hỏi.
Khi việc liên quan dữ liệu hoặc giao diện, thêm tầng thứ sáu:
DỮ LIỆU MẪU  2–3 dòng dữ liệu thật hoặc giống thật, hoặc ảnh/link giao diện mẫu
Sao chép
Ví dụ: “Mỗi món có id, tên, giá. Mẫu: {id: 1, ten: "Cà phê sữa", gia: 29000}”. Có mẫu, AI làm đúng định dạng ngay lần đầu thay vì tự đặt tên trường rồi bạn phải sửa lại cả trang.
Đừng tin các con số kiểu “cách viết này giảm 90% lỗi”. Không có nghiên cứu nào đo được như vậy cho mọi trường hợp. Điều chắc chắn: yêu cầu rõ thì số vòng sửa giảm, và bạn tự thấy điều đó sau vài dự án.
Ba câu thần chú#
Thêm vào cuối yêu cầu khi việc không nhỏ:
1.	“Trước khi làm, hãy nêu kế hoạch và các giả định, chờ tôi duyệt.” AI sẽ lộ ra chỗ nó hiểu sai trước khi viết 200 dòng code sai.
2.	“Nếu thiếu thông tin, hỏi tôi. Không tự bịa.” Đặc biệt với giá, số liệu, tên, nội dung pháp lý.
3.	“Chỉ sửa những gì trong phạm vi. Liệt kê mọi file đã sửa.” Để bạn biết cần kiểm lại chỗ nào.
Chia lát cắt: không bao giờ giao cả app một lần#
Một lát cắt (slice) là phần việc nhỏ nhất mà khi xong, bạn mở ra kiểm được. Ví dụ với landing page:
#	Lát cắt	Kiểm bằng cách
1	Khung trang + header + footer, chưa nội dung	Mở trên máy và điện thoại, menu bấm được
2	Khối đầu trang (tiêu đề, mô tả, nút Zalo)	Nút mở đúng Zalo
3	Khối mẫu đã làm (lưới ảnh)	9 ảnh hiện đủ, không vỡ trên mobile
4	Bảng giá tham khảo	Không cuộn ngang trên 375px
5	Quy trình 4 bước + hỏi đáp	Đọc được, hỏi đáp mở/đóng bằng bàn phím
6	SEO, ảnh chia sẻ, favicon	Dán link vào Zalo/Facebook thấy ảnh và tiêu đề
Quy trình mỗi lát:
Giao việc (5 phần) → AI nêu kế hoạch → Bạn duyệt → AI làm
→ Bạn kiểm theo cột "Kiểm bằng cách" → Lưu checkpoint (Git commit) → Lát tiếp
Sao chép
Lưu checkpoint sau mỗi lát chạy đúng là thói quen quan trọng nhất của bài này. Lát sau AI làm hỏng, bạn quay lại được.
Quản lý ngữ cảnh#
AI không có trí nhớ dài như bạn nghĩ. Cuộc trò chuyện càng dài, phần đầu càng dễ bị “quên”.
•	Một phiên = một lát cắt. Xong lát thì mở phiên mới, đưa lại BRIEF.md và nói đang ở lát nào.
•	Giữ file NOTES.md: ghi quyết định (“dùng CSS thuần, không Tailwind”), để đưa cho phiên mới.
•	Dùng agent thì tạo file hướng dẫn (Claude Code đọc CLAUDE.md, nhiều công cụ khác có file tương tự). Ghi quy tắc dự án ở đó một lần thay vì nhắc lại mỗi lần.
Khi AI làm sai#
Đừng nói “sai rồi, làm lại”. Nói sai chỗ nào, mong đợi gì, thấy gì:
Lát 3 có lỗi: trên điện thoại (375px) lưới ảnh hiện 3 cột, ảnh quá nhỏ.
Mong đợi: dưới 640px hiện 1 cột, 640-1023px 2 cột, từ 1024px 3 cột.
Chỉ sửa CSS của khối .gallery. Không đổi HTML.
Sao chép
Bài Debug theo bằng chứng đi sâu hơn phần này.
Lỗi hay gặp#
•	Sửa nhiều thứ trong một yêu cầu. “Đổi màu, thêm bảng giá, sửa menu” → ba lỗi chồng nhau, không biết cái nào gây ra cái nào.
•	Chấp nhận AI “tặng thêm”. Nếu AI thêm thứ bạn không yêu cầu, bảo nó bỏ đi. Mỗi thứ thừa là một chỗ hỏng tiềm năng.
•	Để AI tự bịa nội dung. Giá, số điện thoại, lời khách khen, số năm kinh nghiệm: bạn cung cấp, hoặc để chỗ trống.
Việc làm ngay#
1.	Từ brief của bạn, chia dự án thành 4–8 lát cắt, mỗi lát có cột “Kiểm bằng cách”.
2.	Viết yêu cầu cho lát 1 theo công thức 5 phần, kèm câu “nêu kế hoạch trước”.
3.	Giao cho AI, duyệt kế hoạch, kiểm kết quả.
Tóm tắt#
•	5 phần: Mục tiêu, Bối cảnh, Phạm vi, Ràng buộc, Nghiệm thu.
•	Bắt AI nêu kế hoạch và hỏi lại trước khi làm việc lớn.
•	Chia lát cắt nhỏ, kiểm từng lát, lưu checkpoint sau mỗi lát đúng.
•	Báo lỗi: chỗ sai, mong đợi, thực tế.
Prompt dùng ngay cho bài này#
•	Chia dự án thành lát cắt: Biến brief thành 4-8 phần việc nhỏ, mỗi phần có cách kiểm riêng, để làm từng bước không vỡ.
•	Giao việc 5 phần: Khung yêu cầu chuẩn cho mỗi lát cắt: Mục tiêu, Bối cảnh, Phạm vi, Ràng buộc, Nghiệm thu.
•	Bắt AI hỏi lại trước khi làm: Thêm 3 câu thần chú vào cuối yêu cầu để AI lộ chỗ hiểu sai trước khi viết 200 dòng code sai.
•	
•	
Vì sao AI quên và bịa: hiểu về context
CƠ BẢN5 phút đọcĐÃ HOÀN THÀNH
Hiểu context là gì, vì sao cuộc trò chuyện càng dài AI càng làm kém đi, nhận ra dấu hiệu AI đang 'ngợp', và phân biệt quên với bịa.
BẠN SẼ LÀM ĐƯỢC
•	Giải thích được context là gì bằng lời của bạn, không cần thuật ngữ.
•	Nhận ra 4 dấu hiệu AI đang bị 'ngợp' context.
•	Phân biệt quên (mất thông tin cũ) với bịa (tự điền thông tin không có).
•	Biết khi nào phải dừng và mở phiên mới thay vì cố sửa tiếp.
Vấn đề thật#
Bạn ngồi với AI đã hai tiếng. Lúc đầu mọi thứ mượt: bạn nói, AI làm đúng. Đến tin nhắn thứ 40, bạn bảo “sửa nút cho to hơn”, AI sửa xong thì menu gãy. Bạn nhắc “hồi nãy tôi dặn không dùng màu đỏ mà”, AI xin lỗi rồi… lại dùng màu đỏ. Cuối buổi bạn phát hiện trong code có một địa chỉ email mà bạn thề là chưa bao giờ đưa cho AI.
Bạn không làm gì sai. Bạn chỉ không biết context là gì — và nó có giới hạn.
Context là gì#
Hãy tưởng tượng AI làm việc trên một cái bàn. Mọi thứ nó cần để làm việc — yêu cầu của bạn, code đã viết, quyết định đã chốt — đều phải nằm trên bàn thì nó mới “thấy”.
Vấn đề: cái bàn có giới hạn. Mỗi mô hình AI có một “cửa sổ context” — lượng chữ tối đa nó đọc được một lúc. Vài chục nghìn đến vài trăm nghìn từ, nghe nhiều, nhưng một dự án vài chục file cộng với cuộc trò chuyện dài sẽ lấp đầy nhanh hơn bạn tưởng.
Khi bàn đầy, AI phải bỏ bớt đồ ra. Thường là bỏ phần cũ nhất — chính là những ràng buộc bạn dặn từ đầu (“không dùng màu đỏ”, “dùng CSS thuần”).
Quy tắc vàng:
AI chỉ làm đúng với những gì đang nằm trong context. Cái gì không còn trên bàn, coi như chưa từng nói.
Vì sao càng dài càng kém#
Ba lý do, từ nhẹ đến nặng:
1. Thông tin cũ bị đẩy ra. Như đã nói ở trên. Ràng buộc đầu buổi là nạn nhân đầu tiên.
2. AI “loãng” sự chú ý. Càng nhiều chữ, AI càng khó biết đâu là quan trọng. Yêu cầu “chỉ sửa nút” nằm giữa 40 tin nhắn sẽ yếu đi so với khi nó đứng một mình. Giống như bạn dặn thợ một câu giữa chợ ồn ào.
3. Lịch sử sai tích tụ. Mỗi vòng sửa sai để lại “vết”: code sai, giả định sai, quyết định đổi ý. AI đọc cả những cái đó và coi như một phần sự thật. Càng sửa loanh quanh, “sự thật” trong mắt AI càng nhiễu.
Kết luận thực tế: phiên dài không phải là phiên hiệu quả. Người làm nhiều với AI đều có chung thói quen: phiên ngắn, việc nhỏ, xong là chốt.
4 dấu hiệu AI đang “ngợp”#
Học thuộc 4 dấu hiệu này. Thấy 2 trong 4 là dừng phiên, đừng cố:
1.	Quên ràng buộc cũ. Bạn dặn rồi mà AI làm ngược lại. Không phải nó láo — là nó không còn thấy.
2.	Tự bịa thay vì hỏi. Bịa địa chỉ, bịa số điện thoại, bịa tên hàm. Khi AI bắt đầu “sáng tạo” ở chỗ cần chính xác, context đã rối.
3.	Sửa chỗ này, hỏng chỗ kia. AI mất bức tranh tổng thể, chỉ còn nhìn thấy miếng ghép trước mặt.
4.	Trả lời chung chung, né tránh. “Tôi đã kiểm tra và mọi thứ có vẻ ổn” — câu này là chuông báo động, không phải báo cáo.
Quên khác bịa — và bịa nguy hiểm hơn#
Hai hiện tượng khác nhau, cách xử khác nhau:
	Quên	Bịa
Là gì	Mất thông tin bạn đã đưa	Tự điền thông tin bạn chưa đưa
Ví dụ	Quên “không dùng màu đỏ”	Tự viết email, số điện thoại, giá tiền
Dấu hiệu	Bạn phải nhắc lại	Mọi thứ trông “xong” một cách đáng ngờ
Cách trị	Nhắc lại / mở phiên mới, đưa lại	Cấm từ đầu: “thiếu thông tin thì hỏi, không tự bịa”
Bịa nguy hiểm hơn vì trông rất thật. Một địa chỉ email bịa đặt nằm giữa code đúng sẽ qua mặt bạn nếu bạn kiểm tra qua loa. Đây là lý do bài Giao việc cho AI dặn: số liệu, tên riêng, nội dung pháp lý — hoặc bạn đưa sẵn, hoặc bắt AI hỏi. Không có lựa chọn thứ ba.
Lỗi hay gặp#
“Càng nói nhiều AI càng hiểu.” Ngược lại. Nói nhiều trong một phiên làm AI hiểu kém đi. Muốn AI hiểu: phiên ngắn, yêu cầu gọn, file quy tắc dự án (bài tiếp theo).
Mắng AI khi nó quên. Vô ích và tốn thời gian. Quên là giới hạn kỹ thuật, không phải thái độ. Việc đúng là mở phiên mới.
Nhầm bịa với đúng. Kiểm tra mọi thứ AI “tự điền”: email, số điện thoại, giá, ngày tháng, tên người. Mất 30 giây, cứu được uy tín của bạn.
Cố cứu phiên đã ngợp. “Thôi ráng thêm chút nữa là xong” — rồi mất thêm một tiếng. Quy tắc: 2 dấu hiệu ngợp là dừng, tóm tắt, mở phiên mới.
Việc làm ngay#
1.	Mở lại một cuộc trò chuyện dài bạn từng làm với AI (nếu còn). Cuộn lên và tìm điểm AI bắt đầu kém đi: tin nhắn thứ mấy? Dấu hiệu đầu tiên là gì trong 4 dấu hiệu trên? Ghi vào NOTES.md.
2.	Viết 4 dấu hiệu “ngợp” vào NOTES.md của dự án, ngay dưới phần quy tắc. Lần sau thấy 2 dấu hiệu là bạn biết phải làm gì.
3.	Kiểm tra một sản phẩm AI từng làm cho bạn: có chỗ nào AI tự bịa (email, số liệu, tên) mà bạn chưa phát hiện không?
Tóm tắt#
•	Context là “cái bàn” AI làm việc — có giới hạn, đầy thì bỏ đồ cũ ra.
•	Phiên càng dài, AI càng kém: quên ràng buộc, loãng chú ý, tích tụ lịch sử sai.
•	4 dấu hiệu ngợp: quên ràng buộc cũ, tự bịa, sửa chỗ này hỏng chỗ kia, trả lời chung chung.
•	Bịa nguy hiểm hơn quên vì trông thật — cấm AI tự điền số liệu/tên/địa chỉ ngay từ đầu.
•	Thấy 2 dấu hiệu là dừng phiên. Bài tiếp theo: mở phiên mới mà không mất gì.
•	KIỂM TRA CUỐI BÀIKIỂM TRA CUỐI BÀI
Mở phiên mới mà không mất gì: tóm tắt và quy tắc dự án
Cơ bản
5 phút đọc
Đã hoàn thành
Biết khi nào phải mở phiên mới, cách tóm tắt bàn giao để phiên mới tiếp tục đúng, và cách viết file quy tắc dự án để không phải nhắc lại mỗi lần.

Bạn sẽ làm được
Biết 3 thời điểm bắt buộc phải mở phiên mới.
Nhờ AI cũ viết bản tóm tắt bàn giao cho AI mới.
Tạo file quy tắc dự án để mọi phiên đều bắt đầu với cùng một sự thật.
Vấn đề thật#
Phiên trò chuyện của bạn đã dài 3 tiếng. AI bắt đầu quên trước quên sau. Bạn biết nên mở phiên mới — nhưng tiếc: “Bỏ thì mất hết những gì đã làm, giải thích lại từ đầu mệt lắm.”

Kết quả: bạn ráng thêm một tiếng nữa trong phiên ngợp, mọi thứ càng rối. Đây là ngụy biện chi phí chìm phiên bản Vibe Coding: tiếc công đã bỏ ra nên tiếp tục đổ thêm công vào chỗ sai.

Sự thật: mở phiên mới đúng cách chỉ mất 5 phút, và phiên mới làm nhanh gấp đôi phiên ngợp.

3 thời điểm bắt buộc mở phiên mới#
Không phải “khi nào rảnh”, mà là 3 thời điểm cụ thể:

1. Thấy 2 trong 4 dấu hiệu “ngợp”. (Bài trước.) Quên ràng buộc, tự bịa, sửa chỗ này hỏng chỗ kia, trả lời chung chung — đừng chữa, mở phiên mới.

2. Chuyển sang lát cắt mới. Đây là kỷ luật, không phải tùy chọn. Mỗi lát cắt là một phiên riêng. Bài Giao việc cho AI đã dặn: một phiên = một lát cắt.

3. Sau 2–3 vòng sửa thất bại cùng một lỗi. Như bài Debug theo bằng chứng: dừng, quay về checkpoint, mở phiên mới với mô tả lỗi đầy đủ. Phiên cũ đã đầy giả định sai.

Ngoại lệ duy nhất được nói tiếp: việc nhỏ, dưới 10 tin nhắn, AI vẫn đang làm đúng. Còn lại, mở phiên mới là mặc định.

Bí quyết: nhờ AI cũ viết tóm tắt cho AI mới#
Bạn không phải tự viết tóm tắt. Trước khi đóng phiên cũ, nhắn đúng câu này:

Tóm tắt giúp tôi để mở phiên mới tiếp tục công việc, gồm 5 mục:
1. Đang làm gì (lát cắt hiện tại)
2. Đã xong gì (kết quả đã kiểm đúng)
3. Đang vướng gì (lỗi chưa sửa được, đã thử gì)
4. Quy tắc đang áp dụng (công nghệ, ràng buộc, điều cấm)
5. Lát tiếp theo cần làm gì
Ngắn gọn, mỗi mục 2-3 dòng. Không cần lịch sử trò chuyện.
Sao chép
Rồi sang phiên mới, mở đầu bằng:

Đây là tóm tắt công việc từ phiên trước:
[dán tóm tắt]

File quy tắc dự án:
[dán nội dung NOTES.md hoặc đường dẫn file]

Lát tiếp theo cần làm: ...
Trước khi làm, nêu kế hoạch và chờ tôi duyệt.
Sao chép
5 phút. Phiên mới bắt đầu với đầy đủ sự thật, không rác.

File quy tắc dự án: viết một lần, dùng mọi phiên#
Có những thứ bạn phải nhắc AI mọi phiên: dùng công nghệ gì, cấm gì, phong cách nào. Nhắc bằng miệng thì phiên nào cũng tốn 5 tin nhắn đầu. Cách đúng: viết thành file.

Với mọi công cụ, file NOTES.md trong thư mục dự án làm được việc này. Với Claude Code, file CLAUDE.md được AI tự đọc đầu phiên (học kỹ ở Khóa Claude Code).

Một file quy tắc tốt:

# Quy tắc dự án: Web xưởng mộc Mộc Lâm

## Công nghệ
- HTML/CSS thuần, không framework, không Tailwind.

## Quy ước
- Tiếng Việt, xưng "Mộc Lâm".
- Giá luôn để chỗ trống [GIÁ], không tự bịa.

## Cấm
- Không tự thêm thư viện ngoài.
- Không sửa file đã chốt (ghi chú trong từng lát).

## Cách làm việc
- Mỗi yêu cầu: nêu kế hoạch trước, chờ duyệt.
- Thiếu thông tin thì hỏi, không tự bịa.
Sao chép
Ngắn — dưới 40 dòng. Quy tắc nào cũng phải là thứ bạn thực sự muốn AI tuân thủ mọi lần. Đừng viết văn.

Lỗi hay gặp#
Tiếc phiên cũ. “Đã nói 3 tiếng rồi, bỏ uổng.” 3 tiếng đó đã cho bạn code đã commit (checkpoint) và bài học. Phiên mới + tóm tắt 5 phút lấy lại tất cả cái đáng giữ, bỏ lại toàn rác.

Tóm tắt quá dài. Copy cả cuộc trò chuyện sang phiên mới là mang rác sang nhà mới. Chỉ 5 mục trên, không hơn.

File quy tắc quá dài. Viết 200 dòng “hướng dẫn” thì AI cũng ngợp như bạn. Quy tắc phải ngắn đến mức bạn tự đọc hết trong 1 phút.

Mỗi phiên một quy tắc khác nhau. Hôm nay dặn “không Tailwind”, mai quên, AI thêm Tailwind vào. File quy tắc cố định chấm dứt chuyện này.

Việc làm ngay#
Mở phiên AI hiện tại (nếu có), dùng câu lệnh tóm tắt ở trên để lấy bản tóm tắt 5 mục. Đọc lại: có mục nào sai không? Sửa trước khi dùng.
Tạo file NOTES.md trong thư mục dự án (nếu chưa có), viết ít nhất 5 quy tắc theo mẫu trên: 2 về công nghệ, 2 về nội dung, 1 điều cấm.
Mở một phiên mới hoàn toàn, dùng mẫu “phiên mới” ở trên với tóm tắt + quy tắc, giao một việc nhỏ. So sánh tốc độ và độ chính xác với phiên cũ dài.
Tóm tắt#
3 thời điểm mở phiên mới: thấy dấu hiệu ngợp, chuyển lát cắt, sau 2–3 vòng sửa thất bại.
Đừng tự tóm tắt — nhờ AI cũ viết bản tóm tắt 5 mục cho AI mới.
Quy tắc lặp lại thì viết thành file (NOTES.md), không nhắc bằng miệng.
File quy tắc ngắn (<40 dòng), chỉ chứa điều bạn muốn AI tuân thủ mọi lần.
Mở phiên mới đúng cách mất 5 phút, nhanh hơn ráng thêm 1 tiếng trong phiên ngợp.
Prompt dùng ngay cho bài này#
Tóm tắt bàn giao phiên: Nhờ AI cũ gói gọn công việc thành 5 mục để phiên mới tiếp tục đúng, không mang rác sang.
Viết file quy tắc dự án: Biến những quy tắc trong đầu bạn thành file NOTES.md để mọi phiên AI đều bắt đầu với cùng một sự thật.


Mô tả giao diện để AI làm đúng ý
CƠ BẢN5 phút đọcĐÃ HOÀN THÀNH
Biến cảm giác 'muốn đẹp' thành mô tả AI làm theo được: phong cách, màu, chữ, bố cục, trạng thái. Và cách thoát khỏi kiểu giao diện 'trông như mọi web AI'.
BẠN SẼ LÀM ĐƯỢC
•	Viết định hướng giao diện bằng từ cụ thể, có tham khảo kèm lý do.
•	Dùng design token (biến màu, chữ, khoảng cách) để giao diện nhất quán.
•	Kiểm giao diện trên điện thoại, bằng bàn phím và theo các trạng thái.
Vấn đề thật#
Bạn bảo AI “làm đẹp lên”. Nó trả về nền gradient tím xanh, thẻ bo tròn có bóng mờ, chữ Inter, hiệu ứng trượt khắp nơi. Trông “xịn”, nhưng giống hệt hàng nghìn trang khác do AI làm, và chẳng nói gì về sản phẩm của bạn.
AI không có gu riêng. Nó trả về mức trung bình khi bạn không nói rõ. Bài này dạy bạn nói rõ.
Năm thứ cần mô tả#
1. Cảm giác (3–5 từ cụ thể)#
Mơ hồ	Cụ thể
Đẹp, hiện đại	Mộc, ấm, tin cậy, nhiều ảnh thật
Chuyên nghiệp	Gọn, nghiêm túc, chữ lớn, ít màu
Trẻ trung	Bụi, đậm, tương phản mạnh, viền dày
2. Màu#
Tối đa: một màu nền, một màu chữ, một màu nhấn, một màu viền, một màu báo lỗi. Ghi mã màu nếu có thương hiệu. Nói rõ màu nhấn dùng ở đâu (“chỉ cho nút chính và chữ cần chú ý”).
3. Chữ#
•	Font phải hỗ trợ đủ dấu tiếng Việt. Nhiều font đẹp trên Google Fonts bị lỗi dấu (ơ, ư, ỹ hiển thị lệch). Ví dụ font thiết kế riêng cho tiếng Việt: Be Vietnam Pro.
•	Cỡ chữ thân bài từ 16px trở lên.
•	Tối đa 2 font: một cho tiêu đề, một cho nội dung (thêm font monospace nếu có code).
4. Bố cục#
Mô tả theo thứ tự người dùng cuộn, như bạn kể lại trang cho ai đó:
Trên điện thoại, từ trên xuống:
1. Thanh trên cùng: logo trái, nút menu phải.
2. Ảnh lớn món bán chạy, dưới ảnh là tên quán và một câu giới thiệu.
3. Nút "Đặt bàn" to, rộng gần hết màn hình.
4. Menu: 3 nhóm, mỗi món 1 dòng: tên trái, giá phải.
5. Địa chỉ + giờ mở cửa + nút chỉ đường.
Trên máy tính: menu chia 3 cột theo nhóm.
Sao chép
5. Trạng thái#
AI hay chỉ làm trạng thái “mọi thứ ổn”. Hỏi thêm:
•	Đang tải thì hiện gì?
•	Không có dữ liệu (rỗng) thì hiện gì?
•	Lỗi thì báo thế nào, người dùng làm gì tiếp?
•	Nút bị vô hiệu thì trông thế nào?
Design token: sửa một chỗ, đổi cả trang#
Design token là các biến đặt tên cho màu, chữ, khoảng cách. Thay vì AI rải mã màu #3b82f6 khắp 20 file, mọi chỗ dùng var(--mau-nhan).
:root {
  --nen: #fbf7ef;
  --chu: #2b2118;
  --mau-nhan: #4f6b3a;
  --vien: #d9cfbf;
  --loi: #b42318;
  --font-chu: 'Be Vietnam Pro', system-ui, sans-serif;
  --khoang-cach: 16px;
}
Sao chép
Thêm vào mọi yêu cầu giao diện: “Chỉ dùng biến trong :root. Không thêm màu mới.” Đây là cách đơn giản nhất để giao diện không trôi dần sau 10 lần sửa.
Thoát khỏi “giao diện AI”#
Dấu hiệu giao diện mặc định của AI và cách tránh:
Dấu hiệu	Thay bằng
Gradient tím xanh	Nền một màu, chọn theo thương hiệu
Mọi thẻ bo tròn lớn, bóng mờ	Chọn một kiểu: bo nhẹ, hoặc viền đậm, nhất quán
Emoji làm biểu tượng đầu mục	Không biểu tượng, hoặc bộ icon thống nhất
Ảnh minh họa chung chung	Ảnh thật sản phẩm của bạn
Mọi thứ căn giữa	Căn trái cho nội dung đọc
Số liệu ấn tượng tự bịa (“10.000+ khách”)	Bỏ, cho tới khi có số thật
Cách giao việc giao diện theo bước#
1.	Định hướng trước, dựng sau. Dùng prompt Mô tả giao diện cho AI trong thư viện: AI đưa 2 phương án, bạn chọn.
2.	Dựng một trang mẫu với đủ thành phần: tiêu đề các cấp, đoạn văn, nút, thẻ, bảng, form. Duyệt trang mẫu trước khi làm các trang thật.
3.	Áp cho từng trang theo lát cắt.
4.	Kiểm bằng checklist Nghiệm thu giao diện.
Gửi ảnh chụp để sửa giao diện#
Nhiều công cụ AI nhận ảnh. Một ảnh chụp kèm khoanh vùng hiệu quả hơn ba đoạn mô tả:
[Đính kèm ảnh chụp màn hình điện thoại]
Vùng khoanh đỏ: nút "Đặt bàn" bị đẩy xuống dưới menu, phải cuộn mới thấy.
Mong đợi: nút nằm ngay dưới câu giới thiệu, thấy được mà không cần cuộn trên màn hình 375x812.
Chỉ sửa thứ tự và CSS của khối đầu trang.
Sao chép
Lỗi hay gặp#
•	Sửa giao diện bằng cảm tính từng chút. “Đậm hơn chút”, “to hơn chút” lặp 20 lần. Hãy nói con số: “chữ tiêu đề 32px, đậm 800”.
•	Chỉ xem trên máy tính. Mở chế độ điện thoại (F12, biểu tượng điện thoại) sau mỗi lát cắt.
•	Để AI chọn font tự do. Kiểm tra dấu tiếng Việt: gõ thử “Ỹ ỹ Ữ ữ Ở ở Ặ ặ”.
Việc làm ngay#
1.	Viết 3–5 từ cảm giác cho sản phẩm của bạn và 1–2 trang tham khảo kèm lý do.
2.	Chạy prompt Mô tả giao diện cho AI, chọn một phương án.
3.	Lưu bảng token vào brief mục 6 và vào file CSS của dự án.
Tóm tắt#
•	AI trả về mức trung bình khi bạn mô tả mơ hồ.
•	Mô tả 5 thứ: cảm giác, màu, chữ, bố cục theo thứ tự cuộn, trạng thái.
•	Dùng design token, cấm AI thêm màu mới.
•	Kiểm trên điện thoại, bằng bàn phím, và ở trạng thái rỗng, lỗi.


Dữ liệu và backend: khi nào cần, dùng Supabase an toàn
TRUNG CẤP6 phút đọcĐÃ HOÀN THÀNH
Phân biệt khi nào web tĩnh là đủ, khi nào cần nơi lưu dữ liệu. Nắm 3 quy tắc sống còn khi cho AI làm phần dữ liệu với Supabase: bảng rõ ràng, bật RLS, không lộ khóa service_role.
BẠN SẼ LÀM ĐƯỢC
•	Quyết định dự án có thật sự cần backend hay không.
•	Mô tả bảng dữ liệu cho AI bằng ngôn ngữ đời thường.
•	Hiểu RLS và hai loại khóa của Supabase để không lộ dữ liệu.
Vấn đề thật#
Bạn muốn khách để lại đơn, muốn người học lưu tiến độ, muốn có trang quản trị. AI nói “dùng Supabase nhé”, tạo bảng, viết code, chạy được. Vài tuần sau bạn phát hiện bất kỳ ai mở Console của trình duyệt cũng đọc được toàn bộ danh sách khách hàng.
Đây là lỗi phổ biến nhất khi vibe code app có dữ liệu. Bài này giúp bạn tránh nó.
Bước 0: có thật sự cần backend?#
Bạn cần	Cách không cần backend
Khách liên hệ, đặt hàng	Nút Zalo, Messenger, email
Nhận đăng ký, khảo sát	Nhúng Google Form, dữ liệu về Google Sheet
Hiển thị danh sách sản phẩm	Viết thẳng trong file nội dung, sửa rồi deploy lại
Nhớ tiến độ của một người trên một máy	Lưu trong trình duyệt (localStorage)
Chỉ cần backend khi: nhiều người tạo ra dữ liệu và cần thấy dữ liệu của nhau hoặc của mình trên nhiều máy, có đăng nhập, có phân quyền.
Lưu trong trình duyệt: localStorage#
Với app một người dùng trên một máy (sổ chi tiêu cá nhân, danh sách việc, ghi chú), localStorage là đủ: dữ liệu nằm trong trình duyệt, tải lại trang vẫn còn, không cần máy chủ, không tốn tiền. Bụi Code lưu tiến độ học của bạn đúng bằng cách này.
Giao việc cho AI:
Làm danh sách việc cần làm, lưu bằng localStorage.
Mỗi việc: id, nội dung, đã xong (đúng/sai), ngày tạo.
Chức năng: thêm, đánh dấu xong, sửa nội dung, xóa (hỏi xác nhận trước khi xóa).
Nghiệm thu:
- Thêm 3 việc, tải lại trang, vẫn còn đủ 3 việc.
- Dữ liệu hỏng hoặc trống thì trang vẫn mở được, không trắng màn hình.
- Có nút "Xuất dữ liệu" ra file JSON để tôi sao lưu.
Sao chép
Biết giới hạn trước khi dùng: dữ liệu chỉ có trên trình duyệt đó. Đổi máy, đổi trình duyệt, xóa dữ liệu duyệt web hoặc dùng cửa sổ ẩn danh là mất. Không lưu thông tin nhạy cảm vào đây vì mọi đoạn code chạy trên trang đều đọc được.
HIỂU SAI HAY GẶP: MCP KHÔNG PHẢI NƠI LƯU DỮ LIỆU CỦA APP
MCP (Model Context Protocol) là cách để công cụ AI của bạn đọc, ghi vào dịch vụ khác trong lúc làm việc, ví dụ cho Claude Code xem cấu trúc bảng trên Supabase. Nó không phải cơ sở dữ liệu, và website của bạn khi chạy cho khách không dùng MCP. Dữ liệu của app vẫn nằm ở localStorage, Google Sheet hoặc một cơ sở dữ liệu như Supabase. MCP được dạy ở Khóa Claude Code.
Supabase là gì, nói ngắn#
Supabase là dịch vụ cho bạn một cơ sở dữ liệu Postgres cùng đăng nhập (Auth), lưu file (Storage) và API tự sinh, quản lý qua giao diện web. Nó hợp với vibe coding vì AI biết nó khá rõ và bạn không phải tự dựng máy chủ.
Hai thứ bạn phải hiểu trước khi cho AI đụng vào:
Hai loại khóa#
Khóa	Ở đâu	Quyền
anon / publishable	Được phép nằm trong code trình duyệt	Chỉ làm được những gì RLS cho phép
service_role / secret	Chỉ ở phía máy chủ, biến môi trường	Bỏ qua mọi RLS, toàn quyền
Tên khóa có thể khác tùy thời điểm; đọc trang API keys trong tài liệu Supabase (nguồn cuối bài).
RLS: Row Level Security#
RLS là luật ở cấp cơ sở dữ liệu quyết định ai được đọc, ghi dòng nào. Khi bật RLS cho một bảng mà chưa có luật (policy) nào, mọi truy cập bằng khóa anon bị chặn. Bạn mở dần bằng policy, ví dụ: “người dùng chỉ đọc được tiến độ của chính mình”.
Quy tắc: Bảng nào có dữ liệu mà trang web đọc bằng khóa anon thì bắt buộc bật RLS. Không có ngoại lệ “tạm thời”.
Mô tả dữ liệu cho AI bằng ngôn ngữ đời thường#
Bạn không cần biết SQL. Bạn cần mô tả rõ thứ gì, ai sở hữu, ai được làm gì:
Tôi cần lưu tiến độ học của người dùng trên Supabase.

Dữ liệu:
- Mỗi người dùng (đăng nhập bằng email) có nhiều bản ghi tiến độ.
- Mỗi bản ghi: bài học nào (mã bài dạng chữ), hoàn thành lúc nào.
- Một người chỉ có một bản ghi cho mỗi bài.

Quyền:
- Người dùng chỉ ĐỌC và THÊM tiến độ của chính mình.
- Không ai xem được tiến độ của người khác.
- Không ai xóa được qua trang web.

Yêu cầu:
1. Viết SQL tạo bảng, bật RLS, và các policy đúng quyền trên.
2. Giải thích từng policy bằng tiếng Việt đơn giản.
3. Cho tôi cách tự kiểm: đăng nhập 2 tài khoản, tài khoản B không thấy dữ liệu của A.
4. Chỉ dùng khóa anon ở trình duyệt. Không dùng service_role trong code client.
Chưa chạy gì, chờ tôi duyệt.
Sao chép
Kiểm tra bảo mật dữ liệu (bắt buộc trước khi công khai)#
1.	Trong trang quản lý Supabase, mở mục bảng: mọi bảng có dấu hiệu RLS enabled.
2.	Tìm trong mã nguồn chữ service_role, secret: không được xuất hiện trong code chạy ở trình duyệt.
3.	Thử bằng hai tài khoản: đăng nhập A tạo dữ liệu; đăng nhập B, xem có thấy dữ liệu A không. Thấy là lỗi nghiêm trọng.
4.	Thử khi chưa đăng nhập: mở cửa sổ ẩn danh, thử gọi trang có dữ liệu.
5.	Dùng tính năng cảnh báo bảo mật trong trang quản lý Supabase (nếu có) và xử lý cảnh báo mức cao.
Lỗi hay gặp#
•	AI tắt RLS “cho chạy được”. Khi gặp lỗi quyền, AI hay đề xuất tắt RLS. Không chấp nhận. Bảo nó viết policy đúng.
•	Dùng service_role ở trình duyệt vì “anon bị lỗi quyền”. Đây là cách lộ toàn bộ dữ liệu.
•	Thu thập dữ liệu thừa. Không cần số điện thoại thì đừng lưu. Dữ liệu càng ít, rủi ro càng ít.
•	Không sao lưu. Biết cách xuất dữ liệu và đã thử khôi phục ít nhất một lần.
Việc làm ngay#
1.	Với ý tưởng của bạn, đi qua bảng “Bước 0”. Ghi vào brief: cần hay không cần backend, vì sao.
2.	Nếu cần: viết mô tả dữ liệu theo mẫu (thứ gì, ai sở hữu, ai làm gì), chưa cần chạy.
3.	Chép 5 bước kiểm tra bảo mật dữ liệu vào NOTES.md.
Tóm tắt#
•	Chỉ thêm backend khi nhiều người tạo dữ liệu và cần đăng nhập, phân quyền.
•	Khóa anon ở trình duyệt được, nhưng chỉ an toàn khi có RLS.
•	Khóa service_role chỉ ở máy chủ.
•	Thử bằng hai tài khoản trước khi công khai.
Prompt dùng ngay cho bài này#
•	Tạo dữ liệu mẫu: Có 2-3 dòng dữ liệu thật hoặc giống thật trước khi làm giao diện để AI không tự đặt tên trường rồi bắt bạn sửa cả trang.
Nguồn#
1.	Supabase Docs: Row Level Security (truy cập 16/10/2026)
2.	Supabase Docs: API keys (truy cập 16/10/2026)
Debug theo bằng chứng: báo lỗi cho AI đúng cách
CƠ BẢN5 phút đọcĐÃ HOÀN THÀNH
Cách tìm và gửi bằng chứng lỗi (thông báo lỗi, các bước tái hiện, ảnh chụp) để AI sửa đúng nguyên nhân, thay vì đoán mò và sửa lòng vòng.
BẠN SẼ LÀM ĐƯỢC
•	Mở Console của trình duyệt và đọc thông báo lỗi cơ bản.
•	Viết báo lỗi tái hiện được theo mẫu 5 dòng.
•	Nhận ra khi AI đang sửa lòng vòng và biết cách dừng lại.
Vấn đề thật#
“Nút không bấm được, sửa đi.” AI đoán một nguyên nhân, sửa. Vẫn không được. AI đoán nguyên nhân khác, sửa thêm. Sau 5 vòng, code đầy những bản vá chồng lên nhau, lỗi gốc vẫn còn, và giờ có thêm lỗi mới.
Đó là debug đoán mò. Cách thoát là đưa cho AI bằng chứng: thứ nó không thể tự thấy.
Ba nguồn bằng chứng#
1. Thông báo lỗi trong Console#
Trên Chrome, Edge hoặc Firefox: bấm F12 (trên Mac: Cmd + Option + I), chọn tab Console. Dòng chữ đỏ là lỗi.
Ví dụ một lỗi hay gặp:
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at main.js:12:28
Sao chép
Bạn không cần hiểu hết. Chỉ cần biết đọc:
•	Loại lỗi: TypeError, đoạn code đang làm việc với một thứ không tồn tại (null).
•	Ở đâu: file main.js, dòng 12, cột 28.
•	Nghĩa thường gặp: code tìm một phần tử trên trang (ví dụ nút) nhưng không thấy, do sai tên, hoặc code chạy trước khi trang tải xong.
Chép nguyên văn dòng lỗi gửi cho AI. Đừng tóm tắt “nó báo lỗi gì đó về null”.
2. Các bước tái hiện#
Lỗi tái hiện được là lỗi đã sửa được một nửa. Ghi đúng từng bước:
1. Mở trang chủ trên điện thoại (hoặc chế độ mobile 375px trong F12)
2. Bấm nút menu (ba gạch) góc phải
3. Bấm "Bảng giá"
→ Mong đợi: menu đóng, trang cuộn tới bảng giá
→ Thực tế: trang cuộn tới bảng giá nhưng menu vẫn mở, che nửa màn hình
Sao chép
3. Ảnh chụp và bối cảnh#
•	Ảnh chụp màn hình lúc lỗi (nhiều công cụ AI nhận ảnh).
•	Trình duyệt, thiết bị: “Safari trên iPhone” khác “Chrome trên máy tính”.
•	Lần cuối chạy đúng là khi nào, đã sửa gì sau đó. Đây thường là manh mối quý nhất.
Mẫu báo lỗi 5 dòng#
LỖI: [Một câu mô tả]
TÁI HIỆN: [Bước 1 → 2 → 3]
MONG ĐỢI: [Điều đáng ra phải xảy ra]
THỰC TẾ: [Điều đang xảy ra + thông báo lỗi nguyên văn nếu có]
BỐI CẢNH: [Trình duyệt/thiết bị; lần cuối chạy đúng; thay đổi gần nhất]

Yêu cầu: Trước khi sửa, hãy nêu 2-3 nguyên nhân có thể và cách kiểm tra từng cái.
Chỉ sửa sau khi xác định được nguyên nhân. Không sửa phần khác.
Sao chép
Dòng “nêu nguyên nhân trước khi sửa” ép AI chẩn đoán thay vì vá bừa.
Bẻ lái khi AI đi sai hướng#
“Bẻ lái” là chặn AI lại trước khi nó sửa tiếp theo hướng sai. Dùng một trong ba câu sau, tùy tình huống:
Dừng sửa code. Liệt kê 3 nguyên nhân có thể, mỗi nguyên nhân kèm cách kiểm tra
để xác nhận hoặc loại bỏ. Chưa sửa gì cho tới khi tôi chọn.
Sao chép
Bản sửa vừa rồi làm hỏng [chức năng X]. Hoàn tác đúng thay đổi đó.
Sau đó giải thích vì sao thay đổi ảnh hưởng tới X trước khi đề xuất cách khác.
Sao chép
Bạn đang đổi cách làm lớn để sửa lỗi nhỏ. Giữ nguyên kiến trúc hiện tại.
Chỉ sửa trong file [tên file], tối đa [N] dòng thay đổi.
Sao chép
Câu đầu ép AI suy luận bằng bằng chứng thay vì đoán rồi vá. Hai câu sau khóa phạm vi để lỗi không lan.
Quy tắc 2 vòng#
Nếu AI sửa 2 lần mà lỗi vẫn còn:
1.	Dừng. Không bảo “thử lại” lần thứ ba.
2.	Quay về checkpoint gần nhất chạy đúng (xem bài Git). Bỏ hết các bản vá lỗi.
3.	Mở phiên mới, đưa brief, mô tả lỗi theo mẫu 5 dòng, kèm thông tin “đã thử A và B, không được”.
4.	Nếu vẫn không được: cắt nhỏ. Tạo một trang thử chỉ chứa đúng phần lỗi, xem lỗi còn không.
Lý do: sau vài vòng thất bại, cuộc trò chuyện đầy giả định sai. Phiên mới sạch thường tìm ra nguyên nhân nhanh hơn.
Kiểm thử hồi quy: sửa xong phải kiểm lại cái cũ#
Sửa lỗi A hay làm hỏng B (gọi là hồi quy, regression). Sau mỗi lần sửa, kiểm nhanh danh sách việc chính trong brief:
Kiểm nhanh sau khi sửa (2 phút):
[ ] Trang chủ mở được, không lỗi đỏ trong Console
[ ] Menu mobile mở/đóng được
[ ] Nút Zalo mở đúng
[ ] Lưới ảnh hiển thị đủ
[ ] Xem ở 375px không cuộn ngang
Sao chép
Lưu danh sách này vào NOTES.md, dùng lại mỗi lần.
Dấu hiệu AI đang sửa lòng vòng#
•	Nó nói “Tôi đã tìm ra nguyên nhân thật sự” lần thứ hai, thứ ba.
•	Nó thêm code kiểm tra if (x !== null) khắp nơi thay vì tìm vì sao x là null.
•	Nó xóa hoặc sửa test để test qua.
•	Nó đổi thư viện, đổi cách làm lớn để “sửa” một lỗi nhỏ.
Thấy các dấu hiệu này: áp quy tắc 2 vòng.
Lỗi hay gặp#
•	Gửi ảnh chụp toàn màn hình code dài. Gửi text lỗi nguyên văn, AI đọc chính xác hơn.
•	Sửa 3 lỗi một lúc. Sửa một, kiểm, checkpoint, rồi mới tới lỗi sau.
•	Không ghi lại lỗi đã gặp. Lỗi hay quay lại. Ghi vào NOTES.md: lỗi gì, nguyên nhân, cách sửa.
Việc làm ngay#
1.	Mở website bất kỳ, bấm F12, xem tab Console. Tìm hiểu xem có dòng đỏ nào không.
2.	Chép mẫu báo lỗi 5 dòng vào NOTES.md.
3.	Viết danh sách “kiểm nhanh sau khi sửa” cho dự án của bạn từ tiêu chí nghiệm thu trong brief.
Tóm tắt#
•	Bằng chứng gồm: lỗi nguyên văn, bước tái hiện, mong đợi và thực tế, bối cảnh.
•	Bắt AI chẩn đoán trước khi sửa.
•	Sửa 2 lần không được: dừng, quay checkpoint, phiên mới, cắt nhỏ.
•	Sửa xong phải kiểm lại các việc chính.
Prompt dùng ngay cho bài này#
•	Báo lỗi 5 dòng: Mẫu báo lỗi có bằng chứng, buộc AI chẩn đoán nguyên nhân trước khi sửa.
•	Debug cùng AI theo bằng chứng: Biến 'sai rồi, làm lại' thành báo cáo lỗi 5 dòng để AI sửa đúng chỗ ngay lần đầu.
3 thất bại kinh điển và cách thoát
CƠ BẢN4 phút đọcĐÃ HOÀN THÀNH
Ba kiểu thất bại mà người mới Vibe Coding nào cũng gặp: AI xóa nhầm file, deploy xong trang trắng, và sửa một lỗi sinh ra ba lỗi mới. Mỗi case có cách thoát cụ thể.
BẠN SẼ LÀM ĐƯỢC
•	Nhận ra 3 kiểu thất bại kinh điển trước khi chúng thành thảm họa.
•	Biết cách thoát cho từng kiểu: checkpoint, rollback, và dừng đúng lúc.
•	Hiểu vì sao 'làm lại từ đầu' hiếm khi là đáp án đúng.
Vấn đề thật#
Thất bại không phải là “có thể” — là “chắc chắn”. Người mới Vibe Coding nào cũng sẽ gặp ít nhất một trong ba kiểu dưới đây. Khác biệt giữa người bỏ cuộc và người đi tiếp không phải là tránh được thất bại, mà là biết cách thoát.
Case 1: AI xóa nhầm file#
Hiện tượng: Bạn nhờ AI “dọn dẹp” hoặc “sửa lại cấu trúc”, quay lại thì mất file bang-gia.html — cả tuần làm việc trong đó.
Vì sao xảy ra: Bạn giao việc mơ hồ (“dọn dẹp giúp tôi”) mà không khoanh phạm vi. AI hiểu “dọn” theo nghĩa đen.
Cách thoát:
1.	Dừng ngay. Đừng nhờ AI “viết lại” — nó sẽ viết phiên bản khác, không phải bản của bạn.
2.	Kiểm tra checkpoint: git log --oneline tìm commit gần nhất còn file.
3.	Khôi phục file từ commit đó (hỏi AI: “khôi phục file bang-gia.html từ commit abc123, không đụng gì khác”).
4.	Sau này: commit sau mỗi lát đúng + không bao giờ nói “dọn dẹp” mà không liệt kê file được đụng.
Bài học: Checkpoint không phải để “lưu cho vui”. Nó là bảo hiểm.
Case 2: Deploy xong trang trắng#
Hiện tượng: Trên máy chạy hoàn hảo. Deploy lên mạng: trang trắng tinh, không chữ không ảnh.
Vì sao xảy ra: 90% là đường dẫn sai. Trên máy bạn, file ảnh ở C:/Users/.../anh/logo.png. Trên server, đường dẫn đó không tồn tại. Hoặc bạn dùng đường dẫn tuyệt đối /images/logo.png trong khi deploy vào thư mục con.
Cách thoát:
1.	Mở trang đã deploy, bấm F12 → tab Console. Đọc dòng đỏ: nó sẽ ghi 404 và tên file không tải được.
2.	Sửa đường dẫn thành tương đối (./images/logo.png hoặc images/logo.png).
3.	Deploy lại. Kiểm tra lại trên điện thoại thật.
Bài học: “Trên máy chạy” chưa phải “chạy thật”. Luôn kiểm tra bản deploy bằng F12.
Case 3: Sửa một lỗi, đẻ ba lỗi mới#
Hiện tượng: Lát 5 đang sửa lỗi nhỏ. AI sửa xong, menu gãy. Sửa menu, form hỏng. Sửa form, trang trắng. Bạn đang ở vòng xoáy.
Vì sao xảy ra: AI đã ngợp context (bài Vì sao AI quên và bịa). Nó không còn thấy bức tranh tổng thể, chỉ vá chỗ này rách chỗ kia. Càng sửa, “sự thật” trong mắt AI càng nhiễu.
Cách thoát:
1.	Dừng. Đây là kỷ luật khó nhất. Đừng “ráng thêm chút nữa”.
2.	Quay về checkpoint gần nhất còn chạy đúng (git log, khôi phục).
3.	Mở phiên mới. Dùng prompt Tóm tắt bàn giao phiên để lấy 5 mục từ phiên cũ.
4.	Giao lại việc với phạm vi nhỏ hơn (chia lát cắt nhỏ hơn nữa).
Bài học: Vòng xoáy sửa lỗi là dấu hiệu, không phải thử thách. Thấy 2-3 vòng không tiến triển là dừng.
Lỗi hay gặp#
“Làm lại từ đầu cho sạch.” Hiếm khi đúng. Làm lại mất hết bài học từ lần trước, và bạn sẽ gặp lại đúng 3 case này ở dự án mới. Sửa từ checkpoint nhanh hơn và dạy bạn nhiều hơn.
Giấu thất bại. Không ghi lại mình đã sai ở đâu thì lần sau sai y hệt. Mỗi lần thoát được một case, ghi 3 dòng vào BUG_LOG.md: hiện tượng, nguyên nhân, cách thoát.
Đổ lỗi cho AI. AI là công cụ. Cả 3 case trên đều có nguyên nhân từ cách bạn giao việc và quản lý phiên — và đó là tin tốt, vì bạn sửa được.
Việc làm ngay#
1.	Kiểm tra dự án của bạn: đã có checkpoint (commit) gần nhất chưa? Nếu chưa, commit ngay bây giờ với tin nhắn rõ ràng.
2.	Tạo file BUG_LOG.md trong thư mục dự án với 3 cột: Hiện tượng | Nguyên nhân | Cách thoát. Để trống — nó sẽ đầy dần, và đó là tài sản.
3.	Mở trang đã deploy (nếu có) bằng F12, kiểm tra tab Console có dòng đỏ nào không.
Tóm tắt#
•	3 thất bại kinh điển: AI xóa nhầm file, deploy trắng trang, vòng xoáy sửa lỗi.
•	Cách thoát chung: dừng → checkpoint → phiên mới → phạm vi nhỏ hơn.
•	“Làm lại từ đầu” hiếm khi là đáp án. Ghi lại thất bại vào BUG_LOG.md.
•	Thất bại không tránh được; không biết cách thoát mới là vấn đề.
Git cho người không code: checkpoint và quay lại
CƠ BẢN4 phút đọcĐÃ HOÀN THÀNH
Git là nút 'lưu game' cho dự án. Học 6 lệnh đủ dùng để lưu bản ổn định, xem AI đã sửa gì, và quay lại khi AI làm hỏng.
BẠN SẼ LÀM ĐƯỢC
•	Hiểu Git làm gì bằng ví dụ đời thường.
•	Dùng 6 lệnh: init, status, add, commit, log, diff, cùng cách quay lại.
•	Lập thói quen commit sau mỗi lát cắt chạy đúng.
Vấn đề thật#
AI vừa sửa 7 file. Trang hỏng. Bạn không nhớ trước đó file trông thế nào. Bạn bảo AI “quay lại như cũ”, nó cố nhớ và viết lại, nhưng không giống hẳn bản cũ.
Nếu có Git, việc này mất 10 giây.
Git là gì, nói kiểu đời thường#
Hãy nghĩ tới lưu game. Mỗi lần qua một màn khó, bạn lưu. Chết ở màn sau thì tải lại bản lưu, không phải chơi lại từ đầu.
•	Repository (repo, kho): thư mục dự án có Git theo dõi.
•	Commit: một bản lưu, kèm ghi chú bạn đặt.
•	Diff: so sánh: bản hiện tại khác bản lưu ở dòng nào.
Git chạy trên máy bạn, miễn phí. GitHub là dịch vụ lưu kho trên mạng (giống Google Drive cho code); bạn cần nó khi muốn sao lưu hoặc đưa website lên mạng, nhưng không bắt buộc để bắt đầu.
Cài đặt#
•	Windows: tải Git tại trang chính thức git-scm.com, cài với lựa chọn mặc định.
•	Mac: mở Terminal, gõ git --version. Nếu máy chưa có, hệ thống sẽ hỏi cài công cụ dòng lệnh; đồng ý.
Kiểm tra:
git --version
Sao chép
Thấy dòng kiểu git version 2.x.x là được. Lần đầu dùng, khai báo tên (tên này ghi vào lịch sử, không phải tài khoản):
git config --global user.name "Ten Cua Ban"
git config --global user.email "email@cuaban.com"
Sao chép
Sáu lệnh đủ dùng#
Mở Terminal (Windows: Git Bash hoặc PowerShell) trong thư mục dự án.
1. Bắt đầu theo dõi (làm một lần)#
git init
Sao chép
2. Xem có gì thay đổi#
git status
Sao chép
Hiện các file đã sửa (đỏ) hoặc đã chọn để lưu (xanh).
3 + 4. Lưu checkpoint#
git add .
git commit -m "Lat 2: khoi dau trang + nut Zalo chay dung"
Sao chép
•	git add . chọn mọi thay đổi.
•	git commit -m "..." lưu, kèm ghi chú. Ghi chú nói cái gì chạy được, không phải “update” hay “sửa”.
5. Xem lịch sử#
git log --oneline
Sao chép
a3f9c21 Lat 3: luoi anh mau da lam, mobile 1 cot
7be0d14 Lat 2: khoi dau trang + nut Zalo chay dung
1c2e8aa Lat 1: khung trang, header, footer
Sao chép
Chuỗi đầu dòng (a3f9c21) là mã của bản lưu.
6. Xem AI vừa sửa gì#
git diff
Sao chép
Dòng bắt đầu bằng - là bị xóa, + là được thêm. Bạn không cần đọc hiểu code để thấy: “ồ, nó sửa cả file header, trong khi mình chỉ bảo sửa bảng giá”.
Quay lại khi AI làm hỏng#
Trường hợp 1: chưa commit, muốn bỏ hết thay đổi từ lần lưu gần nhất.
git restore .
Sao chép
Cảnh báo: lệnh này xóa vĩnh viễn các thay đổi chưa commit. Chỉ dùng khi chắc chắn muốn bỏ.
Trường hợp 2: muốn bỏ thay đổi của riêng một file.
git restore ten-file.html
Sao chép
Trường hợp 3: đã commit bản hỏng, muốn quay lại bản trước nhưng vẫn giữ lịch sử.
git revert HEAD
Sao chép
Lệnh này tạo một commit mới “đảo ngược” commit gần nhất. An toàn hơn các cách xóa lịch sử mà bạn có thể thấy trên mạng.
Nhờ AI dùng Git cho bạn#
Nếu dùng agent (có quyền chạy lệnh), bạn có thể ghi vào file hướng dẫn dự án:
Quy tắc Git cho dự án này:
- Trước khi bắt đầu một lát cắt, chạy git status và báo tôi nếu còn thay đổi chưa commit.
- Sau khi làm xong một lát và tôi xác nhận chạy đúng, commit với ghi chú mô tả cái chạy được.
- Không bao giờ chạy git reset --hard, git push --force, hay xóa lịch sử khi chưa hỏi tôi.
- Sau mỗi lần sửa, cho tôi xem git diff --stat (danh sách file đã đổi).
Sao chép
Agent làm hộ thao tác, nhưng bạn quyết định khi nào commit: chỉ commit khi đã tự kiểm và thấy chạy đúng.
Lỗi hay gặp#
•	Commit một lần cuối ngày. Một commit chứa 10 thay đổi thì không quay lại được từng phần. Commit sau mỗi lát cắt.
•	Commit cả file bí mật. Tạo file .gitignore và ghi các file không được lưu, ví dụ .env (chứa khóa API). Xem bài Đưa website lên mạng an toàn.
•	Chép lệnh lạ từ mạng. Lệnh có chữ --force, --hard, rm -rf có thể xóa công sức của bạn. Hỏi trước khi chạy.
Việc làm ngay#
1.	Cài Git, chạy git --version.
2.	Trong thư mục dự án: git init, rồi commit đầu tiên với BRIEF.md và NOTES.md.
3.	Sửa một chữ trong NOTES.md, chạy git diff để thấy thay đổi, rồi git restore NOTES.md để bỏ.
Tóm tắt#
•	Git là lưu game cho dự án. Commit sau mỗi lát chạy đúng.
•	git diff cho bạn thấy AI đã sửa gì.
•	git restore bỏ thay đổi chưa lưu; git revert đảo ngược commit an toàn.
•	Không commit bí mật; không chạy lệnh có --force hay --hard khi chưa hiểu.
Nguồn#
1.	Git documentation (git-scm.com) (truy cập 16/10/2026)
Đưa website lên mạng an toàn
CƠ BẢN6 phút đọcĐÃ HOÀN THÀNH
Đưa website tĩnh đầu tiên lên Internet, gắn tên miền, và nắm quy tắc sống còn về khóa API và bí mật để không mất tiền vì một dòng code.
BẠN SẼ LÀM ĐƯỢC
•	Phân biệt website tĩnh và website có backend, biết vì sao nên bắt đầu bằng web tĩnh.
•	Deploy một website tĩnh qua một trong ba con đường phổ biến.
•	Giữ khóa API và bí mật đúng chỗ; biết làm gì khi lỡ để lộ.
Vấn đề thật#
Website chạy đẹp trên máy bạn. Giờ bạn muốn gửi link cho khách. Bạn tìm “cách đưa web lên mạng” và gặp hàng chục khái niệm: hosting, server, DNS, SSL, CI/CD. Hoặc tệ hơn: bạn làm app có gọi AI, đưa lên mạng, và vài ngày sau nhận hóa đơn lớn vì khóa API bị lộ trong code.
Bài này đi con đường an toàn và đơn giản nhất.
Website tĩnh và website có backend#
	Tĩnh (static)	Có backend
Là gì	Chỉ gồm file HTML, CSS, JS, ảnh; máy chủ chỉ việc gửi file	Có máy chủ chạy code, thường có cơ sở dữ liệu
Ví dụ	Landing page, portfolio, blog, trang tài liệu	Đăng nhập, đặt hàng, lưu dữ liệu người dùng
Chi phí	Nhiều nơi miễn phí cho dự án nhỏ	Thường mất phí, cần quản trị
Rủi ro bảo mật	Thấp	Cao hơn nhiều
Dự án đầu tiên: làm web tĩnh. Cần nhận thông tin khách? Dùng nút mở Zalo, Messenger, email, hoặc nhúng Google Form, thay vì tự viết backend.
Ba con đường deploy web tĩnh#
Các dịch vụ dưới đây đều có gói miễn phí cho website tĩnh nhỏ tại ngày kiểm tra. Điều khoản có thể thay đổi; đọc trang chính thức (link ở cuối bài).
Đường 1: Kéo thả thư mục (nhanh nhất, để thử)#
Netlify có tính năng kéo thả thư mục website lên trang web của họ để nhận link ngay.
•	Ưu: vài phút, không cần Git.
•	Nhược: mỗi lần sửa phải kéo thả lại; không có lịch sử.
•	Dùng khi: muốn gửi bản xem thử cho khách ngay hôm nay.
Đường 2: GitHub Pages#
Đưa kho Git lên GitHub, bật Pages trong phần Settings của kho.
•	Ưu: miễn phí, gắn liền với Git; mỗi lần đẩy (push) code mới là website tự cập nhật.
•	Nhược: cần tài khoản GitHub; với tài khoản miễn phí, kho thường phải để công khai.
Đường 3: Cloudflare Pages, Vercel, Netlify (nối với GitHub)#
Kết nối kho GitHub, dịch vụ tự build và deploy mỗi lần bạn push.
•	Ưu: có bản xem trước (preview) cho từng thay đổi trước khi lên chính thức; quay lại bản cũ bằng một nút (rollback).
•	Nhược: thêm một tài khoản để quản lý.
•	Dùng khi: dự án bạn sẽ sửa lâu dài. Đây là con đường Bụi Code khuyên.
Nhờ AI hướng dẫn từng bước theo đúng công cụ của bạn:
Tôi có website tĩnh trong thư mục [tên], đã có Git và đã đẩy lên GitHub ở kho [tên kho].
Hãy hướng dẫn tôi deploy lên [Cloudflare Pages / Vercel / Netlify] từng bước,
cho người chưa làm bao giờ. Mỗi bước: tôi bấm vào đâu, nhập gì, kết quả đúng trông thế nào.
Nếu giao diện dịch vụ có thể đã thay đổi so với hiểu biết của bạn, hãy nói rõ và
dẫn link tài liệu chính thức để tôi đối chiếu.
Sao chép
Gắn tên miền#
1.	Mua tên miền tại nhà đăng ký (ở Việt Nam có nhiều nhà đăng ký cho đuôi .vn; đuôi .com mua ở đâu cũng được).
2.	Trong dịch vụ deploy, tìm mục Custom domain, nhập tên miền.
3.	Dịch vụ sẽ đưa các bản ghi DNS (CNAME hoặc A). Vào trang quản lý tên miền, thêm đúng các bản ghi đó.
4.	Chờ cập nhật (từ vài phút tới vài giờ). Kiểm tra trang mở bằng https:// và có biểu tượng ổ khóa.
Bí mật: quy tắc sống còn#
Khóa API (API key) giống chìa khóa thẻ tín dụng: ai có nó có thể dùng dịch vụ và bạn trả tiền.
Quy tắc 1: Website tĩnh không giấu được bí mật. Mọi thứ trong HTML, CSS, JS đều ai cũng xem được (chuột phải → Xem nguồn trang). Không bao giờ đặt khóa API của OpenAI, Anthropic, Google, cổng thanh toán… vào code phía trình duyệt.
Quy tắc 2: Bí mật nằm trong biến môi trường (environment variable) ở phía máy chủ, file .env trên máy bạn, và file .env không bao giờ được commit lên Git.
Tạo file .gitignore ở thư mục gốc dự án:
.env
.env.*
!.env.example
node_modules/
.DS_Store
Sao chép
Và file .env.example (được commit) để ghi tên biến, không có giá trị:
# Chép file này thành .env và điền giá trị thật. KHÔNG commit .env
CONTACT_FORM_ENDPOINT=
Sao chép
Câu cần thêm vào yêu cầu mỗi khi app có gọi dịch vụ bên ngoài:
Kiểm tra bảo mật trước khi tôi deploy:
1. Có khóa API, mật khẩu, token nào nằm trong code phía trình duyệt không? Liệt kê file và dòng.
2. File .env có trong .gitignore chưa? Lịch sử Git đã từng commit file bí mật nào chưa?
3. Có chỗ nào gọi dịch vụ trả phí trực tiếp từ trình duyệt không?
Chỉ báo cáo, chưa sửa.
Sao chép
Lỡ để lộ khóa thì làm gì#
1.	Thu hồi (revoke) khóa ngay trên trang quản lý của dịch vụ, tạo khóa mới. Xóa khỏi code là chưa đủ, vì nó vẫn nằm trong lịch sử Git và có thể đã bị sao chép.
2.	Kiểm tra trang thanh toán/sử dụng của dịch vụ xem có lượt dùng lạ không.
3.	Đặt giới hạn chi tiêu (spending limit) nếu dịch vụ hỗ trợ.
Kiểm tra trước khi gửi link cho ai#
•	 Mở link trên điện thoại thật, không chỉ trên máy tính.
•	 Bấm mọi nút, mọi liên kết.
•	 Console (F12) không có lỗi đỏ.
•	 Không có chữ “Lorem ipsum”, “[GIÁ]”, số điện thoại giả.
•	 Dán link vào Zalo/Facebook: thấy đúng tiêu đề và ảnh xem trước.
•	 Không có bí mật trong mã nguồn trang (Xem nguồn trang, tìm chữ key, token, secret).
Checklist đầy đủ: xem Checklist trước khi deploy trong mục Checklist.
Lỗi hay gặp#
•	Dùng khóa API trong web tĩnh “tạm thời”. Không có “tạm thời”: bot quét mã nguồn công khai liên tục.
•	Deploy thẳng bản chưa kiểm. Dùng bản preview, kiểm xong mới đưa lên chính thức.
•	Quên gia hạn tên miền. Bật tự động gia hạn hoặc đặt nhắc lịch.
Việc làm ngay#
1.	Tạo .gitignore như mẫu trên trong dự án của bạn và commit.
2.	Deploy bản hiện tại bằng đường 1 để có link thử.
3.	Đi hết “Kiểm tra trước khi gửi link” và ghi kết quả vào NOTES.md.
Tóm tắt#
•	Bắt đầu bằng web tĩnh; nhận thông tin qua Zalo, email, Google Form.
•	Ba đường deploy: kéo thả (thử nhanh), GitHub Pages, Cloudflare/Vercel/Netlify (lâu dài).
•	Web tĩnh không giấu được bí mật. Khóa API không bao giờ nằm phía trình duyệt.
•	Lộ khóa: thu hồi ngay, xóa code là chưa đủ.
Prompt dùng ngay cho bài này#
•	Quét bí mật trước khi deploy: Tìm khóa API, mật khẩu, token lọt vào code hoặc lịch sử Git trước khi đưa lên mạng.
•	Soát lỗi trước khi đưa lên mạng: Danh sách kiểm tra cuối cùng trước khi deploy: link gãy, ảnh vỡ, bí mật lộ, mobile.
Nguồn#
1.	GitHub Pages documentation (truy cập 16/10/2026)
2.	Cloudflare Pages documentation (truy cập 16/10/2026)
3.	Netlify documentation (truy cập 16/10/2026)
Prototype hay sản phẩm thật: chấm điểm trước khi cho người khác dùng
TRUNG CẤP5 phút đọcĐÃ HOÀN THÀNH
Bảng chấm 6 nhóm để biết sản phẩm của bạn đang ở mức nào, còn thiếu gì, và khi nào cần nhờ người có chuyên môn kỹ thuật xem lại.
BẠN SẼ LÀM ĐƯỢC
•	Tự chấm sản phẩm theo 6 nhóm: chức năng, giao diện, dữ liệu, bảo mật, vận hành, pháp lý.
•	Xác định mức phát hành phù hợp: tự dùng, nhóm nhỏ, công khai.
•	Biết những dấu hiệu bắt buộc phải nhờ chuyên gia review.
Vấn đề thật#
AI giúp bạn làm ra thứ trông như sản phẩm trong vài buổi. Nhưng “trông như” khác “là”. Câu hỏi khó nhất không phải “làm thế nào” mà là “đã đủ an toàn để người khác dùng chưa?”. Bài này cho bạn một cách trả lời có căn cứ thay vì cảm giác.
Ba mức phát hành#
Mức	Ai dùng	Hậu quả khi lỗi	Yêu cầu tối thiểu
A. Tự dùng	Chỉ bạn	Bạn mất thời gian	Chạy được việc chính
B. Nhóm nhỏ	Đồng nghiệp, người quen biết đây là bản thử	Phiền, có thể mất dữ liệu thử	A + giao diện ổn + sao lưu
C. Công khai	Người lạ, khách hàng	Mất tiền, lộ dữ liệu, mất uy tín, rủi ro pháp lý	Đạt hết bảng chấm bên dưới
Ghi rõ mức mục tiêu vào brief. Một công cụ nội bộ cho 3 người không cần đạt mức C; một trang nhận đơn hàng bắt buộc đạt C.
Bảng chấm 6 nhóm#
Mỗi dòng: Đạt / Chưa / Không áp dụng. Mức C cần mọi dòng áp dụng đều Đạt.
1. Chức năng#
•	Mọi việc chính trong brief chạy đúng, bạn đã tự bấm thử từng việc.
•	Thử với dữ liệu “xấu”: ô trống, chữ rất dài, số âm, ký tự đặc biệt, tiếng Việt có dấu.
•	Có thông báo lỗi dễ hiểu khi người dùng nhập sai, không hiện mã lỗi kỹ thuật.
•	Sau lần sửa gần nhất đã chạy lại danh sách kiểm nhanh (kiểm thử hồi quy).
2. Giao diện và trải nghiệm#
•	Xem được trên điện thoại thật (375px) và máy tính, không cuộn ngang.
•	Dùng được bằng bàn phím (Tab qua các nút, thấy rõ đang ở nút nào).
•	Chữ đủ to, đủ tương phản; không truyền đạt thông tin chỉ bằng màu.
•	Không còn nội dung giả: “Lorem ipsum”, giá ảo, lời khen bịa.
3. Dữ liệu#
•	Biết dữ liệu nằm ở đâu (trên máy người dùng, Google Sheet, cơ sở dữ liệu nào).
•	Có sao lưu, và đã thử khôi phục từ bản sao lưu ít nhất một lần.
•	Chỉ thu thập dữ liệu thật sự cần.
4. Bảo mật#
•	Không có khóa API, mật khẩu trong code phía trình duyệt hay trong lịch sử Git.
•	Có đăng nhập: người A không xem được dữ liệu của người B (thử bằng hai tài khoản).
•	Trang quản trị không truy cập được khi chưa đăng nhập (thử mở link trực tiếp ở cửa sổ ẩn danh).
•	Đã chạy kiểm tra phụ thuộc (ví dụ npm audit nếu dự án dùng npm) và xử lý lỗi mức cao.
5. Vận hành#
•	Biết cách quay lại bản trước (rollback) và đã thử.
•	Có cách biết khi website sập hoặc lỗi (ít nhất: tự kiểm định kỳ, hoặc dịch vụ theo dõi miễn phí).
•	Biết chi phí hằng tháng và có giới hạn chi tiêu với dịch vụ tính tiền theo lượt.
•	Ghi lại cách deploy trong README.md để 3 tháng sau bạn (hoặc người khác) làm lại được.
6. Pháp lý và minh bạch#
•	Có trang chính sách riêng tư nếu thu thập bất kỳ dữ liệu cá nhân nào.
•	Thu thập dữ liệu cá nhân tại Việt Nam: tìm hiểu quy định bảo vệ dữ liệu cá nhân hiện hành, hoặc hỏi người có chuyên môn pháp lý.
•	Ảnh, chữ, font có quyền sử dụng.
•	Không hứa điều sản phẩm không làm được.
Prompt nhờ AI chấm hộ (bạn vẫn là người kiểm)#
Đóng vai người kiểm tra độc lập (QA và bảo mật). Đây là dự án [mô tả ngắn], mục tiêu phát hành
mức [A/B/C]. Đọc BRIEF.md và mã nguồn.

Chấm theo 6 nhóm: Chức năng, Giao diện, Dữ liệu, Bảo mật, Vận hành, Pháp lý.
Với mỗi phát hiện: mức độ (Chặn phát hành / Nghiêm trọng / Nên sửa / Góp ý),
bằng chứng (file, dòng, hoặc bước tái hiện), và cách sửa đề xuất.

Quy tắc: không sửa gì, chỉ báo cáo. Không phóng đại mức độ. Nói rõ phần nào bạn không kiểm được
(ví dụ cần chạy thử trên điện thoại thật).
Sao chép
AI giúp tìm, nhưng dòng nào ghi Đạt thì bạn phải tự kiểm. Đừng chép báo cáo của AI vào cột Đạt.
Khi nào bắt buộc nhờ chuyên gia#
Nhờ người có kinh nghiệm phát triển phần mềm review trước khi phát hành mức C nếu sản phẩm có bất kỳ thứ nào:
•	Thanh toán, ví, xử lý tiền.
•	Đăng nhập và dữ liệu riêng của từng người.
•	Dữ liệu nhạy cảm: sức khỏe, tài chính, giấy tờ tùy thân, trẻ em.
•	Hơn vài trăm người dùng, hoặc doanh nghiệp phụ thuộc vào nó hằng ngày.
Chi phí một buổi review nhỏ hơn nhiều so với chi phí một vụ lộ dữ liệu. Đây không phải thất bại của Vibe Coding; đây là cách làm nghề có trách nhiệm.
Lỗi hay gặp#
•	Chấm Đạt vì AI nói đạt. AI báo xong không phải bằng chứng (bài 1).
•	Áp mức C cho mọi thứ. Bạn sẽ không bao giờ phát hành. Chọn đúng mức cho đúng sản phẩm.
•	Phát hành rồi mới nghĩ tới sao lưu. Dữ liệu mất ngày đầu thì không có bản nào để khôi phục.
Việc làm ngay#
1.	Ghi mức phát hành mục tiêu (A, B hay C) vào brief.
2.	Chấm sản phẩm của bạn theo 6 nhóm. Đếm số dòng “Chưa”.
3.	Biến mỗi dòng “Chưa” thành một lát cắt việc cần làm.
Tóm tắt#
•	Ba mức: tự dùng, nhóm nhỏ, công khai. Chọn đúng mức.
•	Chấm 6 nhóm: chức năng, giao diện, dữ liệu, bảo mật, vận hành, pháp lý.
•	AI giúp tìm lỗi; bạn tự kiểm từng dòng Đạt.
•	Tiền, đăng nhập, dữ liệu nhạy cảm: nhờ chuyên gia trước khi công khai.
Prompt dùng ngay cho bài này#
•	Review độc lập trước phát hành: AI đóng vai người kiểm tra QA và bảo mật, chỉ báo cáo có bằng chứng, chưa sửa.

