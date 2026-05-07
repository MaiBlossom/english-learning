// ── DATA ──────────────────────────────────────────────────────────────

const VOCAB = [
  // TOEIC 600-700 — Business Fundamentals
  { id: 1, level: "basic", en: "Allocate", vi: "Phân bổ / Phân chia", ipa: "/ˈæləkeɪt/", example: "We need to allocate more resources to this project.", exampleVi: "Chúng ta cần phân bổ thêm nguồn lực cho dự án này." },
  { id: 2, level: "basic", en: "Agenda", vi: "Chương trình nghị sự", ipa: "/əˈdʒendə/", example: "Please review the meeting agenda before tomorrow.", exampleVi: "Vui lòng xem lại chương trình cuộc họp trước ngày mai." },
  { id: 3, level: "basic", en: "Authorize", vi: "Cho phép / Ủy quyền", ipa: "/ˈɔːθəraɪz/", example: "Only the manager can authorize this payment.", exampleVi: "Chỉ có quản lý mới có thể phê duyệt khoản thanh toán này." },
  { id: 4, level: "basic", en: "Comply", vi: "Tuân thủ / Chấp hành", ipa: "/kəmˈplaɪ/", example: "All staff must comply with the safety regulations.", exampleVi: "Tất cả nhân viên phải tuân thủ quy định an toàn." },
  { id: 5, level: "basic", en: "Coordinate", vi: "Phối hợp / Điều phối", ipa: "/koʊˈɔːrdɪneɪt/", example: "She coordinates the work between different departments.", exampleVi: "Cô ấy điều phối công việc giữa các phòng ban." },
  { id: 6, level: "basic", en: "Delegate", vi: "Ủy thác / Giao việc", ipa: "/ˈdelɪɡeɪt/", example: "A good manager knows how to delegate tasks effectively.", exampleVi: "Một quản lý giỏi biết cách giao việc hiệu quả." },
  { id: 7, level: "basic", en: "Expedite", vi: "Đẩy nhanh / Xúc tiến", ipa: "/ˈekspɪdaɪt/", example: "Can you expedite the delivery of this order?", exampleVi: "Bạn có thể đẩy nhanh việc giao đơn hàng này không?" },
  { id: 8, level: "basic", en: "Facilitate", vi: "Tạo điều kiện / Thúc đẩy", ipa: "/fəˈsɪlɪteɪt/", example: "Technology can facilitate communication in the workplace.", exampleVi: "Công nghệ có thể thúc đẩy giao tiếp tại nơi làm việc." },
  { id: 9, level: "basic", en: "Implement", vi: "Triển khai / Thực hiện", ipa: "/ˈɪmplɪment/", example: "The new policy will be implemented next month.", exampleVi: "Chính sách mới sẽ được triển khai vào tháng tới." },
  { id: 10, level: "basic", en: "Mandatory", vi: "Bắt buộc", ipa: "/ˈmændətɔːri/", example: "Attendance at the safety training is mandatory.", exampleVi: "Tham dự buổi huấn luyện an toàn là bắt buộc." },
  { id: 11, level: "basic", en: "Negotiate", vi: "Đàm phán / Thương lượng", ipa: "/nɪˈɡoʊʃɪeɪt/", example: "They negotiated a better price with the supplier.", exampleVi: "Họ đã thương lượng được giá tốt hơn với nhà cung cấp." },
  { id: 12, level: "basic", en: "Notify", vi: "Thông báo", ipa: "/ˈnoʊtɪfaɪ/", example: "Please notify us if you are unable to attend.", exampleVi: "Vui lòng thông báo cho chúng tôi nếu bạn không thể tham dự." },
  { id: 13, level: "basic", en: "Preliminary", vi: "Sơ bộ / Bước đầu", ipa: "/prɪˈlɪmɪneri/", example: "We conducted a preliminary review of the proposal.", exampleVi: "Chúng tôi đã thực hiện xem xét sơ bộ đề xuất." },
  { id: 14, level: "basic", en: "Reimburse", vi: "Hoàn tiền / Bồi hoàn", ipa: "/ˌriːɪmˈbɜːrs/", example: "The company will reimburse your travel expenses.", exampleVi: "Công ty sẽ hoàn lại chi phí đi lại của bạn." },
  { id: 15, level: "basic", en: "Submit", vi: "Nộp / Gửi (chính thức)", ipa: "/səbˈmɪt/", example: "Please submit your report by Friday.", exampleVi: "Vui lòng nộp báo cáo của bạn trước thứ Sáu." },
  { id: 16, level: "basic", en: "Acknowledge", vi: "Xác nhận / Thừa nhận", ipa: "/əkˈnɒlɪdʒ/", example: "Please acknowledge receipt of this email.", exampleVi: "Vui lòng xác nhận đã nhận được email này." },
  { id: 17, level: "basic", en: "Adjacent", vi: "Liền kề / Sát bên", ipa: "/əˈdʒeɪsənt/", example: "The conference room is adjacent to the main office.", exampleVi: "Phòng họp nằm liền kề văn phòng chính." },
  { id: 18, level: "basic", en: "Accommodate", vi: "Phục vụ / Chứa đựng", ipa: "/əˈkɒmədeɪt/", example: "The venue can accommodate up to 300 attendees.", exampleVi: "Địa điểm có thể phục vụ tới 300 người tham dự." },

  // TOEIC 700-800 — Upper-Intermediate Business
  { id: 19, level: "intermediate", en: "Procurement", vi: "Mua sắm / Thu mua (doanh nghiệp)", ipa: "/prəˈkjʊərmənt/", example: "The procurement department handles all supplier contracts.", exampleVi: "Phòng thu mua xử lý tất cả hợp đồng nhà cung cấp." },
  { id: 20, level: "intermediate", en: "Streamline", vi: "Hợp lý hóa / Tối ưu hóa quy trình", ipa: "/ˈstriːmlaɪn/", example: "We need to streamline our approval process.", exampleVi: "Chúng ta cần tối ưu hóa quy trình phê duyệt." },
  { id: 21, level: "intermediate", en: "Consolidate", vi: "Củng cố / Hợp nhất", ipa: "/kənˈsɒlɪdeɪt/", example: "The company plans to consolidate its regional offices.", exampleVi: "Công ty có kế hoạch hợp nhất các văn phòng khu vực." },
  { id: 22, level: "intermediate", en: "Viable", vi: "Khả thi / Có thể thực hiện được", ipa: "/ˈvaɪəbl/", example: "Is this business model financially viable?", exampleVi: "Mô hình kinh doanh này có khả thi về tài chính không?" },
  { id: 23, level: "intermediate", en: "Incur", vi: "Chịu / Phát sinh (chi phí, rủi ro)", ipa: "/ɪnˈkɜːr/", example: "Late deliveries will incur a penalty fee.", exampleVi: "Giao hàng trễ sẽ phát sinh khoản phạt." },
  { id: 24, level: "intermediate", en: "Subsequent", vi: "Tiếp theo / Sau đó", ipa: "/ˈsʌbsɪkwənt/", example: "The initial test succeeded; subsequent tests confirmed the results.", exampleVi: "Bài kiểm tra ban đầu thành công; các bài tiếp theo xác nhận kết quả." },
  { id: 25, level: "intermediate", en: "Proficient", vi: "Thành thạo / Giỏi", ipa: "/prəˈfɪʃənt/", example: "Candidates must be proficient in Microsoft Excel.", exampleVi: "Ứng viên phải thành thạo Microsoft Excel." },
  { id: 26, level: "intermediate", en: "Affiliated", vi: "Liên kết / Trực thuộc", ipa: "/əˈfɪlɪeɪtɪd/", example: "This branch is affiliated with the head office in Singapore.", exampleVi: "Chi nhánh này trực thuộc trụ sở chính ở Singapore." },
  { id: 27, level: "intermediate", en: "Terminate", vi: "Chấm dứt (hợp đồng)", ipa: "/ˈtɜːrmɪneɪt/", example: "The contract will be terminated at the end of this year.", exampleVi: "Hợp đồng sẽ chấm dứt vào cuối năm nay." },
  { id: 28, level: "intermediate", en: "Comprehensive", vi: "Toàn diện / Đầy đủ", ipa: "/ˌkɒmprɪˈhensɪv/", example: "We need a comprehensive plan to address this issue.", exampleVi: "Chúng ta cần kế hoạch toàn diện để giải quyết vấn đề này." },
  { id: 29, level: "intermediate", en: "Scrutinize", vi: "Xem xét kỹ / Kiểm tra chặt chẽ", ipa: "/ˈskruːtɪnaɪz/", example: "Auditors will scrutinize all financial records.", exampleVi: "Kiểm toán viên sẽ xem xét kỹ tất cả hồ sơ tài chính." },
  { id: 30, level: "intermediate", en: "Optimize", vi: "Tối ưu hóa", ipa: "/ˈɒptɪmaɪz/", example: "We are working to optimize the production workflow.", exampleVi: "Chúng tôi đang tối ưu hóa quy trình sản xuất." },
  { id: 31, level: "intermediate", en: "Vendor", vi: "Nhà cung cấp / Đối tác cung ứng", ipa: "/ˈvendər/", example: "We are evaluating three vendors for this software solution.", exampleVi: "Chúng tôi đang đánh giá ba nhà cung cấp cho giải pháp phần mềm này." },
  { id: 32, level: "intermediate", en: "Pursue", vi: "Theo đuổi / Xúc tiến", ipa: "/pərˈsuː/", example: "The company intends to pursue new markets in Southeast Asia.", exampleVi: "Công ty có ý định mở rộng sang các thị trường mới ở Đông Nam Á." },
  { id: 33, level: "intermediate", en: "Initiative", vi: "Sáng kiến / Tính chủ động", ipa: "/ɪˈnɪʃətɪv/", example: "She took the initiative to restructure the filing system.", exampleVi: "Cô ấy đã chủ động tái cơ cấu hệ thống lưu trữ hồ sơ." },
  { id: 34, level: "intermediate", en: "Collaborate", vi: "Hợp tác / Cộng tác", ipa: "/kəˈlæbəreɪt/", example: "Our teams collaborate closely with external partners.", exampleVi: "Các nhóm của chúng tôi hợp tác chặt chẽ với đối tác bên ngoài." },
  { id: 35, level: "intermediate", en: "Contingent", vi: "Phụ thuộc vào / Tùy thuộc", ipa: "/kənˈtɪndʒənt/", example: "The deal is contingent on board approval.", exampleVi: "Thỏa thuận phụ thuộc vào sự phê duyệt của hội đồng quản trị." },
  { id: 36, level: "intermediate", en: "Prohibit", vi: "Cấm / Nghiêm cấm", ipa: "/prəˈhɪbɪt/", example: "Company policy prohibits the use of personal devices during meetings.", exampleVi: "Chính sách công ty cấm sử dụng thiết bị cá nhân trong cuộc họp." },

  // TOEIC 800+ — Advanced Professional Vocabulary
  { id: 37, level: "advanced", en: "Discrepancy", vi: "Sự chênh lệch / Không khớp", ipa: "/dɪˈskrepənsi/", example: "There is a discrepancy between the invoice and the purchase order.", exampleVi: "Có sự chênh lệch giữa hóa đơn và đơn đặt hàng." },
  { id: 38, level: "advanced", en: "Liability", vi: "Trách nhiệm pháp lý / Khoản nợ", ipa: "/ˌlaɪəˈbɪlɪti/", example: "The company accepted full liability for the product defect.", exampleVi: "Công ty đã chấp nhận hoàn toàn chịu trách nhiệm về lỗi sản phẩm." },
  { id: 39, level: "advanced", en: "Stipulate", vi: "Quy định / Đề ra điều khoản", ipa: "/ˈstɪpjuleɪt/", example: "The contract stipulates a 30-day notice period for termination.", exampleVi: "Hợp đồng quy định thời hạn thông báo 30 ngày khi chấm dứt." },
  { id: 40, level: "advanced", en: "Mitigate", vi: "Giảm thiểu / Giảm nhẹ (rủi ro)", ipa: "/ˈmɪtɪɡeɪt/", example: "Diversifying investments can mitigate financial risk.", exampleVi: "Đa dạng hóa đầu tư có thể giảm thiểu rủi ro tài chính." },
  { id: 41, level: "advanced", en: "Deteriorate", vi: "Suy giảm / Xuống cấp", ipa: "/dɪˈtɪərɪəreɪt/", example: "Product quality began to deteriorate after the change in supplier.", exampleVi: "Chất lượng sản phẩm bắt đầu suy giảm sau khi thay đổi nhà cung cấp." },
  { id: 42, level: "advanced", en: "Reciprocal", vi: "Có đi có lại / Tương hỗ", ipa: "/rɪˈsɪprəkl/", example: "The two companies signed a reciprocal trade agreement.", exampleVi: "Hai công ty ký kết thỏa thuận thương mại tương hỗ." },
  { id: 43, level: "advanced", en: "Indispensable", vi: "Không thể thiếu / Thiết yếu", ipa: "/ˌɪndɪˈspensəbl/", example: "Strong analytical skills are indispensable for this role.", exampleVi: "Kỹ năng phân tích tốt là không thể thiếu cho vị trí này." },
  { id: 44, level: "advanced", en: "Pragmatic", vi: "Thực dụng / Thực tế (tích cực)", ipa: "/præɡˈmætɪk/", example: "We need a pragmatic approach, not just theoretical solutions.", exampleVi: "Chúng ta cần cách tiếp cận thực tế, không chỉ giải pháp lý thuyết." },
  { id: 45, level: "advanced", en: "Subsidize", vi: "Trợ cấp / Tài trợ (từ nhà nước/tổ chức)", ipa: "/ˈsʌbsɪdaɪz/", example: "The government subsidizes renewable energy projects.", exampleVi: "Chính phủ trợ cấp cho các dự án năng lượng tái tạo." },
  { id: 46, level: "advanced", en: "Plausible", vi: "Có vẻ hợp lý / Đáng tin cậy", ipa: "/ˈplɔːzɪbl/", example: "The explanation is plausible but requires further investigation.", exampleVi: "Giải thích có vẻ hợp lý nhưng cần điều tra thêm." },
  { id: 47, level: "advanced", en: "Diligent", vi: "Chăm chỉ / Tận tâm (trong công việc)", ipa: "/ˈdɪlɪdʒənt/", example: "She is a diligent analyst who never misses a detail.", exampleVi: "Cô ấy là một nhà phân tích tận tâm, không bao giờ bỏ sót chi tiết." },
  { id: 48, level: "advanced", en: "Endeavor", vi: "Nỗ lực / Cố gắng (trang trọng)", ipa: "/ɪnˈdevər/", example: "We will endeavor to deliver the project on schedule.", exampleVi: "Chúng tôi sẽ nỗ lực bàn giao dự án đúng tiến độ." },
  { id: 49, level: "advanced", en: "Perpetuate", vi: "Duy trì mãi / Làm tiếp diễn", ipa: "/pərˈpetʃueɪt/", example: "We must not perpetuate inefficient practices.", exampleVi: "Chúng ta không được tiếp tục duy trì các thực tiễn kém hiệu quả." },
  { id: 50, level: "advanced", en: "Concede", vi: "Nhượng bộ / Thừa nhận (miễn cưỡng)", ipa: "/kənˈsiːd/", example: "After lengthy negotiations, they conceded to our terms.", exampleVi: "Sau đàm phán dài, họ đã nhượng bộ theo điều khoản của chúng tôi." },
  { id: 51, level: "advanced", en: "Ambiguous", vi: "Mơ hồ / Không rõ ràng", ipa: "/æmˈbɪɡjuəs/", example: "The clause in the contract is ambiguous and needs clarification.", exampleVi: "Điều khoản trong hợp đồng mơ hồ và cần làm rõ." },
  { id: 52, level: "advanced", en: "Meticulous", vi: "Tỉ mỉ / Cẩn thận đến từng chi tiết", ipa: "/məˈtɪkjʊləs/", example: "The auditor conducted a meticulous review of all transactions.", exampleVi: "Kiểm toán viên đã xem xét tỉ mỉ tất cả giao dịch." },
  { id: 53, level: "advanced", en: "Lucrative", vi: "Béo bở / Có lợi nhuận cao", ipa: "/ˈluːkrətɪv/", example: "Expanding to the Chinese market could be highly lucrative.", exampleVi: "Mở rộng sang thị trường Trung Quốc có thể rất có lợi nhuận." },
  { id: 54, level: "advanced", en: "Unprecedented", vi: "Chưa từng có / Chưa có tiền lệ", ipa: "/ʌnˈpresɪdentɪd/", example: "The company achieved unprecedented growth last fiscal year.", exampleVi: "Công ty đạt mức tăng trưởng chưa từng có trong năm tài chính vừa qua." },
];

const GRAMMAR_QUESTIONS = [
  { category: "Bị động / Tương lai hoàn thành", q: "The quarterly report ___ by the time the board convenes next week.", opts: ["will complete", "will have been completed", "is being completed", "completes"], ans: 1,
    explain: "Future Perfect Passive (will have been + V3): diễn tả việc sẽ HOÀN THÀNH TRƯỚC một thời điểm tương lai ('by the time the board convenes'). Bị động vì 'report' là vật được hoàn thành, không tự hoàn thành được. 'Will complete' thiếu bị động; 'is being completed' là đang làm, chưa xong." },
  { category: "Câu điều kiện Loại 3", q: "If the marketing team ___ the survey data more thoroughly, they would have identified the product flaws before launch.", opts: ["had analyzed", "have analyzed", "analyzed", "would analyze"], ans: 0,
    explain: "Câu điều kiện Loại 3 (If + past perfect, would have + V3): diễn tả điều KHÔNG THẬT trong QUÁ KHỨ — nhóm marketing KHÔNG phân tích kỹ, vì vậy KHÔNG phát hiện lỗi. 'Had analyzed' = past perfect, bắt buộc trong mệnh đề If loại 3. 'Analyzed' (quá khứ đơn) dùng trong Loại 2 (giả định hiện tại)." },
  { category: "Đảo ngữ (Inversion)", q: "Rarely ___ such comprehensive financial documentation been submitted ahead of the deadline.", opts: ["has", "have", "had", "does"], ans: 0,
    explain: "ĐẢO NGỮ với trạng từ phủ định: Rarely/Never/Seldom + trợ động từ + S. 'Documentation' là danh từ số ít, câu ở thì hiện tại hoàn thành → dùng 'has'. Dạng bình thường: 'Such documentation has rarely been submitted...' Đảo ngữ dùng trong văn phong trang trọng để nhấn mạnh tính hiếm gặp." },
  { category: "Gerund / Động danh từ", q: "The board strongly recommended ___ the merger proposal before committing to any financial obligations.", opts: ["to review", "reviewing", "reviewed", "review"], ans: 1,
    explain: "'Recommend + V-ing' là cấu trúc CỐ ĐỊNH. Các động từ recommend, suggest, consider, avoid, risk đều đi với V-ing, KHÔNG đi với 'to + V'. Phân biệt: 'recommend to review' = SAI; 'recommend + object + to + V' (khuyên AI đó làm gì) = đúng, nhưng ở đây không có tân ngữ chỉ người." },
  { category: "Subjunctive / Giả định cách", q: "It is essential that every department head ___ the updated compliance guidelines before the audit.", opts: ["reviews", "review", "reviewed", "has reviewed"], ans: 1,
    explain: "SUBJUNCTIVE sau tính từ essential/vital/necessary + that: S + V (nguyên mẫu, không chia). Dù chủ ngữ là số ít ('every department head'), động từ vẫn KHÔNG thêm -s. Đây là cấu trúc bắt buộc trong văn phong pháp lý và kinh doanh trang trọng. 'Reviews' (sai vì thêm -s) và 'has reviewed' đều sai trong subjunctive." },
  { category: "Đại từ quan hệ sở hữu", q: "The vendor ___ contract was terminated last quarter has filed a formal complaint with procurement.", opts: ["whose", "which", "that", "who"], ans: 0,
    explain: "'Whose' thể hiện quan hệ SỞ HỮU (vendor's contract = hợp đồng của nhà cung cấp). 'Whose' dùng được cho CẢ người lẫn vật. 'Which' và 'that' không thể hiện sở hữu trực tiếp mà không có 'of'. 'Who' chỉ làm chủ ngữ hoặc tân ngữ, không thể thay thế sở hữu cách." },
  { category: "Bị động với Modal", q: "All discrepancies in the financial statements must ___ before the scheduled audit next month.", opts: ["be resolved", "resolve", "have resolved", "resolving"], ans: 0,
    explain: "Modal + be + V3 (Bị động với động từ khiếm khuyết): 'discrepancies' là vật không tự giải quyết được → buộc dùng bị động. Cấu trúc: must/should/can + be + past participle. 'Must resolve' = chủ động (ai đó giải quyết); 'must have resolved' = phỏng đoán việc đã xảy ra trong quá khứ (sai ngữ cảnh)." },
  { category: "Câu tường thuật (Reported Speech)", q: "The CFO stated that the company ___ its operational costs by 15% during the third quarter.", opts: ["reduces", "reduced", "had reduced", "has reduced"], ans: 1,
    explain: "CÂU TƯỜNG THUẬT: động từ tường thuật ở quá khứ ('stated') → mệnh đề theo sau lùi một thì: Present Simple → Past Simple (reduced). 'Reduces' (hiện tại) làm câu nghe như đang phát biểu trực tiếp. 'Had reduced' = past perfect, dùng khi muốn nhấn mạnh việc hoàn thành TRƯỚC thời điểm 'stated'." },
  { category: "Mệnh đề phân từ hoàn thành", q: "___ no qualified internal candidates, the management decided to conduct an external recruitment drive.", opts: ["Finding", "Found", "Having found", "To find"], ans: 2,
    explain: "'Having found' (perfect participle = Having + V3): diễn tả hành động hoàn thành TRƯỚC hành động trong mệnh đề chính ('decided'). Ban quản lý nhận ra không có ứng viên nội bộ TRƯỚC, rồi mới quyết định tuyển ngoài. 'Finding' (simple participle) cũng chấp nhận được nhưng 'Having found' nhấn mạnh rõ thứ tự thời gian hơn." },
  { category: "Subjunctive bị động", q: "The audit committee insisted that all financial records ___ to the regulatory authority without delay.", opts: ["are submitted", "be submitted", "were submitted", "submit"], ans: 1,
    explain: "Subjunctive bị động sau 'insist/demand/require': S + insist + that + S + be + V3 (base passive). 'Be submitted' = bị động dạng nguyên mẫu, đúng trong subjunctive. Phân biệt: 'are submitted' (hiện tại chỉ thị thường), 'were submitted' (quá khứ chỉ thị), 'submit' (thiếu bị động — records không tự nộp được)." },
  { category: "Prove + to be", q: "The company's decision to expand into emerging markets proved ___ more challenging than initially anticipated.", opts: ["to be", "being", "be", "been"], ans: 0,
    explain: "'Prove + to be + adj/noun' = chứng tỏ là, hóa ra là (cụm từ CỐ ĐỊNH). Dùng khi kết quả thực tế đã rõ ràng. 'Prove to be ineffective', 'prove to be correct' đều theo cấu trúc này. 'Proved being' là sai ngữ pháp. Đây là collocation quan trọng trong văn phong kinh doanh." },
  { category: "So...that / Such...that", q: "The project's cost overrun was ___ significant that the board voted to suspend all non-essential expenditures.", opts: ["very", "so", "such", "too"], ans: 1,
    explain: "Cấu trúc 'so + adj/adv + that' = quá... đến nỗi. Phân biệt: 'so + adj + that' (SO significant that — không có danh từ theo sau) ≠ 'such + a/an + adj + noun + that' (such a significant overrun that). Ở đây 'significant' đứng một mình không có danh từ → dùng 'so'. 'Very' và 'too' không đi với 'that' theo cấu trúc này." },
  { category: "Tương lai hoàn thành", q: "By the close of the fiscal year, the R&D team ___ over 200 hours on the product prototype.", opts: ["logged", "has logged", "will have logged", "had logged"], ans: 2,
    explain: "FUTURE PERFECT (will have + V3): hành động sẽ HOÀN THÀNH trước một thời điểm tương lai ('by the close of the fiscal year'). Từ khóa: 'by + thời điểm tương lai'. Phân biệt: 'had logged' = past perfect (dùng với mốc thời gian QUÁ KHỨ), 'has logged' = hiện tại hoàn thành (đến hiện tại, không phải tương lai)." },
  { category: "Despite / Although", q: "___ the substantial budget cuts, the project team managed to deliver all milestones on schedule.", opts: ["Despite", "Although", "However", "Even so"], ans: 0,
    explain: "'Despite/In spite of + N/V-ing' (không có S+V theo sau): dùng khi theo sau là DANH TỪ hoặc cụm danh từ ('the substantial budget cuts'). 'Although/Even though' đi với MỆNH ĐỀ đầy đủ (Although + S + V). 'However' và 'Even so' là trạng ngữ liên kết, không theo sau trực tiếp một danh từ." },
  { category: "Causative Have", q: "The director had the legal team ___ all contractual terms before the negotiation session.", opts: ["reviewed", "review", "reviewing", "to review"], ans: 1,
    explain: "Causative 'have + object (người) + V (nguyên mẫu)': nhờ/yêu cầu ai đó làm gì. 'Had the legal team review' = yêu cầu nhóm pháp lý xem xét. Phân biệt: 'have + vật + V3' = nhờ người làm cho mình (have the documents reviewed = nhờ ai đó xem xét tài liệu). Object là người → dùng V nguyên mẫu." },
  { category: "Should have + V3", q: "The shipment ___ have arrived last Thursday, but it was delayed due to customs clearance issues.", opts: ["should", "must", "would", "shall"], ans: 0,
    explain: "'Should have + V3' = lẽ ra phải/đáng lý ra đã... (nhưng thực tế KHÔNG xảy ra). Hàng lẽ ra đến thứ Năm nhưng bị trễ vì thông quan. Phân biệt: 'must have arrived' = chắc chắn đã đến (phỏng đoán có căn cứ); 'would have arrived' = dùng trong câu điều kiện Loại 3; 'should have' = kỳ vọng không thành." },
  { category: "Mệnh đề danh từ (Noun Clause)", q: "Whether the proposed acquisition ___ the company's long-term profitability remains a subject of debate among analysts.", opts: ["enhances", "will enhance", "enhance", "enhanced"], ans: 1,
    explain: "NOUN CLAUSE với 'whether': khi mệnh đề danh từ làm chủ ngữ ('Whether... remains'), động từ bên trong dùng thì tương lai ('will enhance') nếu việc đó chưa xảy ra. 'Enhances' (present simple) hàm ý sự thật đã rõ. 'Whether it will enhance...' là cấu trúc chuẩn cho điều còn bất định trong tương lai." },
  { category: "Tương lai tiếp diễn", q: "This time next month, our regional team ___ the new CRM system across all branch offices.", opts: ["implements", "will implement", "will be implementing", "has implemented"], ans: 2,
    explain: "FUTURE CONTINUOUS (will be + V-ing): hành động ĐANG XẢY RA tại một thời điểm CỤ THỂ trong tương lai ('this time next month'). Từ khóa: 'this time next week/month/year'. 'Will implement' (simple) chỉ diễn đạt dự định; 'will be implementing' nhấn mạnh hành động IN PROGRESS tại thời điểm đó." },
  { category: "Mixed Conditional", q: "If the company ___ in emerging markets five years ago, it would be generating significantly higher revenues today.", opts: ["invested", "had invested", "invests", "were investing"], ans: 1,
    explain: "MIXED CONDITIONAL (Loại 3 → Loại 2): điều KHÔNG THẬT trong QUÁ KHỨ → ẢNH HƯỞNG đến HIỆN TẠI. Mệnh đề If: had + V3 (past perfect). Mệnh đề chính: would + be V-ing (continuous hiện tại). Phân biệt: Conditional Loại 3 thuần (would have generated) chỉ nói về quá khứ; Mixed conditional liên kết quá khứ với kết quả ở hiện tại." },
  { category: "Causative Have (Vật)", q: "Before the trade exhibition, the marketing director had all promotional brochures ___ by a professional design agency.", opts: ["design", "designed", "to design", "designing"], ans: 1,
    explain: "'Have + object (vật) + V3 (past participle)' = nhờ người khác làm cho mình. 'Had brochures designed' = nhờ agency thiết kế (brochures là vật được tác động → V3). Phân biệt với 'have + người + V (base)': had the agency design... Khi tân ngữ là VẬT bị tác động → dùng V3 (bị động ngầm)." },
  { category: "Đảo ngữ: Hardly...when", q: "Hardly ___ the board approved the restructuring plan when several key executives submitted their resignations.", opts: ["did", "had", "has", "was"], ans: 1,
    explain: "ĐẢO NGỮ với 'Hardly...when': Hardly + had + S + V3 ... when + S + V (simple past). Diễn tả: 'Vừa... thì ngay lập tức...'. Dùng PAST PERFECT trong đảo ngữ vì sự kiện thứ nhất (approved) xảy ra ngay trước sự kiện thứ hai (submitted). Tương tự 'No sooner...than' nhưng dùng 'when'." },
  { category: "Wish / Regret", q: "The regional manager wishes the headquarters ___ more transparent about the upcoming organizational restructuring.", opts: ["is", "was", "were", "had been"], ans: 2,
    explain: "'Wish + were' = ước muốn KHÔNG THẬT ở HIỆN TẠI. Tương tự câu điều kiện Loại 2, dùng 'were' cho TẤT CẢ ngôi (kể cả 'headquarters'). Phân biệt: 'wish + had been' = ước về điều không thật trong QUÁ KHỨ (hối tiếc); 'wish + would' = ước ai đó thay đổi hành vi trong tương lai." },
  { category: "Mệnh đề quan hệ rút gọn", q: "The memorandum ___ to all department heads last Friday reiterated the zero-tolerance policy on misconduct.", opts: ["circulated", "circulating", "which circulates", "to circulate"], ans: 0,
    explain: "MỆNH ĐỀ QUAN HỆ RÚT GỌN (Reduced Relative Clause) bị động: 'circulated' = which was circulated. Khi mệnh đề quan hệ ở dạng bị động (which was + V3), ta rút gọn bằng cách bỏ 'which was' → chỉ còn V3. 'Circulating' = which was circulating (chủ động, tiếp diễn — sai nghĩa). 'Which circulates' = mệnh đề đầy đủ chủ động (sai)." },
  { category: "Hiện tại hoàn thành vs Quá khứ đơn", q: "The company's revenue ___ by 23% since the new pricing strategy was implemented in Q1.", opts: ["grew", "has grown", "had grown", "was growing"], ans: 1,
    explain: "HIỆN TẠI HOÀN THÀNH (has grown) + 'since': khoảng thời gian TỪ QUÁ KHỨ ĐẾN HIỆN TẠI. 'Since + mốc quá khứ' luôn đi với hiện tại hoàn thành khi tác động kéo dài đến hiện tại. 'Grew' (quá khứ đơn) ngụ ý việc đã kết thúc, không phù hợp với 'since'; 'had grown' = past perfect, cần một mốc quá khứ khác làm chuẩn." },
  { category: "Causative Have (nâng cao)", q: "To remain competitive, organizations are required to have their operational strategies ___ on a quarterly basis.", opts: ["reviewing", "be reviewed", "reviewed", "review"], ans: 2,
    explain: "'Have + object (vật) + V3': chiến lược là vật → dùng V3 (reviewed). 'Have their strategies reviewed' = nhờ ai đó xem xét chiến lược định kỳ. Phân biệt: 'be reviewed' = bị động nguyên thể (cần 'required to be reviewed', khác cấu trúc causative); 'reviewing' = gerund (sai cấu trúc). Đây là causative bị động có vật là tân ngữ." },
  { category: "Not only...but also", q: "The new employee handbook not only outlines the code of conduct ___ details the performance evaluation process.", opts: ["but also", "as well as", "and also", "in addition"], ans: 0,
    explain: "CẤU TRÚC SONG SONG 'not only...but also': nối hai yếu tố CÓ CẤU TRÚC TƯƠNG ĐƯƠNG. Ở đây: 'not only outlines...but also details...' (hai động từ song song). 'As well as' thường nối danh từ/cụm danh từ, ít tự nhiên hơn với động từ. 'And also' ít trang trọng. 'In addition' cần đứng đầu câu mới." },
  { category: "Stipulate + Subjunctive", q: "The new regulations stipulate that all vendors ___ comprehensive insurance coverage before signing any contract.", opts: ["carry", "carries", "will carry", "carried"], ans: 0,
    explain: "Subjunctive sau 'stipulate/specify/mandate/require': S + V (base form, không chia). 'Carry' là base form đúng trong subjunctive, dù chủ ngữ 'all vendors' là số nhiều — ta vẫn dùng base form. 'Carries' sai (thêm -s như present simple). 'Will carry' là future indicative, không phải subjunctive trang trọng." },
  { category: "Passive Reporting Verb", q: "The merger ___ expected to generate approximately $50 million in annual cost savings for both organizations.", opts: ["is", "was", "has been", "will be"], ans: 0,
    explain: "'Is expected to + V' = được kỳ vọng sẽ (bị động hiện tại, văn phong báo chí/kinh doanh). Đây là cấu trúc 'Reporting passive': is expected/believed/reported/alleged + to V. 'Was expected' = đã từng được kỳ vọng (quá khứ, ngụ ý kỳ vọng đó không còn nữa). 'Is expected' nhấn mạnh kỳ vọng vẫn còn hiệu lực hiện tại." },
  { category: "Câu điều kiện Loại 2 (Subjunctive)", q: "If the budget allocation ___ more flexible, the project manager could explore additional marketing channels.", opts: ["is", "was", "were", "will be"], ans: 2,
    explain: "Câu điều kiện Loại 2 dùng 'were' cho TẤT CẢ ngôi (kể cả 'the budget allocation' là số ít). Đây là SUBJUNCTIVE WERE, thể hiện điều KHÔNG THẬT hoặc KHÓ XẢY RA ở hiện tại. 'Was' không được chấp nhận trong văn phong trang trọng (TOEIC/GMAT). 'Is' sẽ là Loại 1 (can explore, không phải could)." },
  { category: "Necessitate + Gerund", q: "The unprecedented scale of the data breach necessitated ___ an independent cybersecurity firm to conduct a forensic investigation.", opts: ["hire", "to hire", "hiring", "hired"], ans: 2,
    explain: "'Necessitate + V-ing': động từ 'necessitate' (đòi hỏi phải, cần thiết phải) đi với GERUND, KHÔNG đi với infinitive. Tương tự: require/involve/entail/justify + V-ing. 'Necessitate to hire' = SAI. So sánh: 'require hiring' (gerund) vs 'require sb to hire' (infinitive với tân ngữ chỉ người)." },
];

const LISTENING_SENTENCES = [
  { text: "All employees are required to complete the mandatory compliance training by the end of the month.", level: "Trung bình" },
  { text: "Could you forward the updated project timeline to all relevant stakeholders before the meeting?", level: "Trung bình" },
  { text: "The preliminary findings indicate a significant discrepancy in the inventory records.", level: "Khó" },
  { text: "We need to streamline our procurement process to reduce operational costs significantly.", level: "Trung bình" },
  { text: "The conference call has been rescheduled to accommodate participants in different time zones.", level: "Trung bình" },
  { text: "Please ensure that all deliverables are submitted prior to the deadline stated in the contract.", level: "Trung bình" },
  { text: "Despite the challenging economic climate, the company maintained its competitive edge.", level: "Khó" },
  { text: "The new data privacy regulations require companies to obtain explicit consent from users.", level: "Khó" },
  { text: "Our marketing campaign generated unprecedented brand awareness in emerging markets.", level: "Khó" },
  { text: "The merger is contingent upon regulatory approval from the relevant government authorities.", level: "Khó" },
  { text: "I would like to request an extension for the submission of the quarterly financial report.", level: "Trung bình" },
  { text: "The feasibility study concluded that the proposed expansion is both viable and financially sustainable.", level: "Khó" },
  { text: "All travel reimbursements must be submitted with original receipts and itemized expense reports.", level: "Trung bình" },
  { text: "The project has been allocated additional resources to expedite its completion before year-end.", level: "Trung bình" },
  { text: "Stakeholder feedback will be incorporated into the revised version of the strategic plan.", level: "Trung bình" },
  { text: "The vendor failed to comply with the terms stipulated in the service level agreement.", level: "Khó" },
  { text: "Your application for the senior management position has been forwarded to the hiring committee.", level: "Trung bình" },
  { text: "The company's decision to diversify its portfolio has proven to be highly lucrative.", level: "Khó" },
  { text: "We are committed to delivering comprehensive solutions that align with your business objectives.", level: "Khó" },
  { text: "The annual performance appraisal will be conducted in accordance with the revised evaluation criteria.", level: "Khó" },
  { text: "Could you provide a brief overview of the key milestones achieved during the third quarter?", level: "Trung bình" },
  { text: "The legal department is reviewing the contractual obligations before authorizing the transaction.", level: "Khó" },
  { text: "Effective delegation of tasks is indispensable for maintaining productivity in a large organization.", level: "Khó" },
  { text: "The client has expressed concerns regarding the timeline and the scope of the deliverables.", level: "Trung bình" },
  { text: "To mitigate potential risks, a comprehensive contingency plan has been developed by the team.", level: "Khó" },
  { text: "All personnel are expected to adhere to the code of conduct outlined in the employee handbook.", level: "Khó" },
  { text: "The research and development department is currently pursuing several innovative solutions.", level: "Trung bình" },
  { text: "Your proposal has been well-received, and we look forward to collaborating with your organization.", level: "Trung bình" },
  { text: "The quarterly earnings report exceeded analyst expectations by a considerable margin.", level: "Khó" },
  { text: "The board has approved the acquisition of a leading software company in the Asia-Pacific region.", level: "Khó" },
];

// ── API HELPER ────────────────────────────────────────────────────────

function apiFetch(path, opts = {}) {
  const token = localStorage.getItem('em_token') || '';
  return fetch(path, {
    method: opts.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': 'Bearer ' + token } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  }).then(res => res.json().then(data => {
    if (!res.ok) throw new Error(data.error || 'Lỗi server');
    return data;
  }));
}

async function syncProgressFromAPI() {
  if (!currentUser) return;
  const p = `em_${currentUser.username}_`;
  const progress = await apiFetch('/api/progress').catch(() => ({}));
  const map = {
    learned: p + 'learned', grammar_best: p + 'grammar_best',
    listen_correct: p + 'listen_correct', listen_wrong: p + 'listen_wrong',
    streak: p + 'streak', grammar_errors: p + 'grammar_errors',
    listen_errors: p + 'listen_errors', trans_history: p + 'trans_history',
  };
  Object.entries(map).forEach(([apiKey, lsKey]) => {
    const val = progress[apiKey];
    if (val !== undefined && val !== null) {
      localStorage.setItem(lsKey, typeof val === 'string' ? val : JSON.stringify(val));
    }
  });
}

let currentUser = null;

// ── STATE ─────────────────────────────────────────────────────────────

function loadState() {
  const p = currentUser ? `em_${currentUser.username}_` : 'em_';
  return {
    learned: new Set(JSON.parse(localStorage.getItem(p + 'learned') || '[]')),
    grammarBest: parseInt(localStorage.getItem(p + 'grammar_best') || '0'),
    listeningCorrect: parseInt(localStorage.getItem(p + 'listen_correct') || '0'),
    listeningWrong: parseInt(localStorage.getItem(p + 'listen_wrong') || '0'),
    streak: JSON.parse(localStorage.getItem(p + 'streak') || '{"count":0,"lastDate":""}'),
    grammarErrors: JSON.parse(localStorage.getItem(p + 'grammar_errors') || '[]'),
    listenErrors: JSON.parse(localStorage.getItem(p + 'listen_errors') || '[]'),
    transHistory: JSON.parse(localStorage.getItem(p + 'trans_history') || '[]'),
  };
}

function saveState(s) {
  const p = currentUser ? `em_${currentUser.username}_` : 'em_';
  localStorage.setItem(p + 'learned', JSON.stringify([...s.learned]));
  localStorage.setItem(p + 'grammar_best', s.grammarBest);
  localStorage.setItem(p + 'listen_correct', s.listeningCorrect);
  localStorage.setItem(p + 'listen_wrong', s.listeningWrong);
  localStorage.setItem(p + 'streak', JSON.stringify(s.streak));
  localStorage.setItem(p + 'grammar_errors', JSON.stringify(s.grammarErrors.slice(-50)));
  localStorage.setItem(p + 'listen_errors', JSON.stringify(s.listenErrors.slice(-30)));
  localStorage.setItem(p + 'trans_history', JSON.stringify(s.transHistory.slice(-50)));
  // Đồng bộ lên server (fire and forget)
  if (currentUser) {
    apiFetch('/api/progress', { method: 'POST', body: {
      learned: [...s.learned], grammar_best: s.grammarBest,
      listen_correct: s.listeningCorrect, listen_wrong: s.listeningWrong,
      streak: s.streak,
      grammar_errors: s.grammarErrors.slice(-50),
      listen_errors: s.listenErrors.slice(-30),
      trans_history: s.transHistory.slice(-50),
    }}).catch(() => {});
  }
}

let state;

// ── STREAK ────────────────────────────────────────────────────────────

function updateStreak() {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.streak.lastDate === today) return;
  if (state.streak.lastDate === yesterday) {
    state.streak.count++;
  } else {
    state.streak.count = 1;
  }
  state.streak.lastDate = today;
  saveState(state);
}

// ── TAB NAVIGATION ────────────────────────────────────────────────────

function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  const navEl = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
  if (navEl) navEl.classList.add('active');
  if (tabName === 'dashboard') updateDashboard();
  if (tabName === 'history') renderHistory();
  if (tabName === 'admin') renderAdminPanel();
}

document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

document.querySelectorAll('.action-card').forEach(card => {
  card.addEventListener('click', () => switchTab(card.dataset.tab));
});

// ── DASHBOARD ─────────────────────────────────────────────────────────

function updateDashboard() {
  document.getElementById('streakCount').textContent = state.streak.count;
  document.getElementById('streakStat').textContent = state.streak.count;
  document.getElementById('totalLearned').textContent = state.learned.size;

  const best = state.grammarBest;
  document.getElementById('grammarBest').textContent = best ? `${best}/30` : '-';

  const total = state.listeningCorrect + state.listeningWrong;
  const rate = total > 0 ? Math.round((state.listeningCorrect / total) * 100) : 0;
  document.getElementById('listeningRate').textContent = rate + '%';

  const pct = Math.round((state.learned.size / VOCAB.length) * 100);
  document.getElementById('vocabProgress').style.width = pct + '%';
  document.getElementById('vocabProgressLabel').textContent = `${state.learned.size} / ${VOCAB.length} từ`;
}

// ── VOCABULARY ────────────────────────────────────────────────────────

let currentVocab;
let vocabIndex = 0;
let isFlipped = false;

function getFilteredVocab(level) {
  return level === 'all' ? [...VOCAB] : VOCAB.filter(w => w.level === level);
}

function renderCard() {
  if (currentVocab.length === 0) return;
  const word = currentVocab[vocabIndex];
  isFlipped = false;
  document.getElementById('flashcardInner').classList.remove('flipped');

  document.getElementById('wordLevel').textContent = { basic: 'Cơ bản', intermediate: 'Trung cấp', advanced: 'Nâng cao' }[word.level];
  document.getElementById('wordEnglish').textContent = word.en;
  document.getElementById('wordPronunciation').textContent = word.ipa;
  document.getElementById('wordVietnamese').textContent = word.vi;
  document.getElementById('wordExample').textContent = `"${word.example}"`;
  document.getElementById('wordExampleVi').textContent = word.exampleVi;
  document.getElementById('currentCard').textContent = vocabIndex + 1;
  document.getElementById('totalCards').textContent = currentVocab.length;
  updateVocabStats();
}

function updateVocabStats() {
  const learnedInSet = currentVocab.filter(w => state.learned.has(w.id)).length;
  document.getElementById('learnedCount').textContent = state.learned.size;
  document.getElementById('totalCount').textContent = VOCAB.length;
}

document.getElementById('flashcard').addEventListener('click', (e) => {
  if (e.target.id === 'speakBtn') return;
  isFlipped = !isFlipped;
  document.getElementById('flashcardInner').classList.toggle('flipped', isFlipped);
});

document.getElementById('speakBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  speak(currentVocab[vocabIndex].en);
});

document.getElementById('btnNext').addEventListener('click', () => {
  vocabIndex = (vocabIndex + 1) % currentVocab.length;
  renderCard();
});

document.getElementById('btnPrev').addEventListener('click', () => {
  vocabIndex = (vocabIndex - 1 + currentVocab.length) % currentVocab.length;
  renderCard();
});

document.getElementById('btnLearned').addEventListener('click', () => {
  state.learned.add(currentVocab[vocabIndex].id);
  saveState(state);
  updateVocabStats();
  document.getElementById('btnLearned').textContent = '✓ Đã thuộc!';
  setTimeout(() => {
    document.getElementById('btnLearned').textContent = '✓ Đã thuộc';
    vocabIndex = (vocabIndex + 1) % currentVocab.length;
    renderCard();
  }, 600);
});

document.getElementById('btnReview').addEventListener('click', () => {
  state.learned.delete(currentVocab[vocabIndex].id);
  saveState(state);
  updateVocabStats();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentVocab = getFilteredVocab(btn.dataset.level);
    vocabIndex = 0;
    renderCard();
  });
});

// ── GRAMMAR ───────────────────────────────────────────────────────────

let grammarIndex = 0;
let grammarScore = 0;
let answered = false;
let questions;

function renderQuestion() {
  const q = questions[grammarIndex];
  answered = false;

  document.getElementById('questionNum').textContent = grammarIndex + 1;
  document.getElementById('totalQuestions').textContent = questions.length;
  document.getElementById('currentScore').textContent = grammarScore;
  document.getElementById('maxScore').textContent = grammarIndex;
  document.getElementById('questionProgressFill').style.width = ((grammarIndex / questions.length) * 100) + '%';
  document.getElementById('questionCategory').textContent = q.category;
  document.getElementById('questionText').textContent = q.q;

  const fb = document.getElementById('questionFeedback');
  fb.textContent = '';
  fb.className = 'question-feedback';
  document.getElementById('nextQuestionBtn').style.display = 'none';

  const optContainer = document.getElementById('answerOptions');
  optContainer.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-opt';
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optContainer.appendChild(btn);
  });
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;

  const q = questions[grammarIndex];
  const opts = document.querySelectorAll('.answer-opt');
  opts.forEach(btn => btn.disabled = true);

  const fb = document.getElementById('questionFeedback');

  if (idx === q.ans) {
    grammarScore++;
    opts[idx].classList.add('correct');
    fb.textContent = '✅ Chính xác! ' + q.explain;
    fb.className = 'question-feedback show correct-fb';
  } else {
    opts[idx].classList.add('wrong');
    opts[q.ans].classList.add('correct');
    fb.textContent = `❌ Sai rồi. Đáp án đúng là: "${q.opts[q.ans]}". ${q.explain}`;
    fb.className = 'question-feedback show wrong-fb';
    state.grammarErrors.push({ q: q.q, category: q.category, userAns: q.opts[idx], correctAns: q.opts[q.ans], explain: q.explain });
    saveState(state);
  }

  document.getElementById('currentScore').textContent = grammarScore;
  document.getElementById('maxScore').textContent = grammarIndex + 1;

  if (grammarIndex < questions.length - 1) {
    document.getElementById('nextQuestionBtn').style.display = 'inline-block';
  } else {
    setTimeout(showGrammarResult, 1000);
  }
}

function showGrammarResult() {
  document.getElementById('grammarQuiz').style.display = 'none';
  document.getElementById('grammarResult').style.display = 'block';
  document.getElementById('finalScore').textContent = `${grammarScore} / ${questions.length}`;
  document.getElementById('questionProgressFill').style.width = '100%';

  const pct = Math.round((grammarScore / questions.length) * 100);
  let msg = '';
  if (pct >= 90) msg = 'Xuất sắc! Ngữ pháp của bạn rất tốt! 🎉';
  else if (pct >= 70) msg = 'Khá tốt! Tiếp tục luyện tập nhé! 💪';
  else if (pct >= 50) msg = 'Cố gắng hơn nhé, bạn đang tiến bộ! 📚';
  else msg = 'Đừng nản lòng, hãy ôn lại và thử lại nhé! 🌱';

  document.getElementById('resultMessage').textContent = msg;

  if (grammarScore > state.grammarBest) {
    state.grammarBest = grammarScore;
    saveState(state);
  }
}

document.getElementById('nextQuestionBtn').addEventListener('click', () => {
  grammarIndex++;
  renderQuestion();
});

document.getElementById('restartGrammar').addEventListener('click', () => {
  grammarIndex = 0;
  grammarScore = 0;
  questions = [...GRAMMAR_QUESTIONS].sort(() => Math.random() - 0.5);
  document.getElementById('grammarResult').style.display = 'none';
  document.getElementById('grammarQuiz').style.display = 'block';
  renderQuestion();
});

// ── LISTENING ─────────────────────────────────────────────────────────

let listeningIndex = 0;
let listeningChecked = false;
let sentences;

function renderListening() {
  const s = sentences[listeningIndex];
  listeningChecked = false;

  document.getElementById('listeningLevel').textContent = s.level;
  document.getElementById('listeningCurrent').textContent = listeningIndex + 1;
  document.getElementById('listeningTotal').textContent = sentences.length;
  document.getElementById('listeningInput').value = '';
  document.getElementById('listeningFeedback').style.display = 'none';
  document.getElementById('hintArea').style.display = 'none';
  document.getElementById('hintText').style.display = 'none';
  document.getElementById('hintText').textContent = '';
  document.getElementById('showHint').textContent = '💡 Hiện gợi ý';

  updateListeningStats();
}

function updateListeningStats() {
  const c = state.listeningCorrect;
  const w = state.listeningWrong;
  const total = c + w;
  const rate = total > 0 ? Math.round((c / total) * 100) : 0;
  document.getElementById('listeningCorrect').textContent = c;
  document.getElementById('listeningWrong').textContent = w;
  document.getElementById('listeningRateStat').textContent = rate + '%';
  document.getElementById('listeningRate').textContent = rate + '%';
}

function normalizeText(t) {
  return t.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

document.getElementById('listenBtn').addEventListener('click', () => {
  speak(sentences[listeningIndex].text, 1.0);
});

document.getElementById('slowBtn').addEventListener('click', () => {
  speak(sentences[listeningIndex].text, 0.65);
});

document.getElementById('checkListening').addEventListener('click', () => {
  if (listeningChecked) return;
  const input = document.getElementById('listeningInput').value.trim();
  if (!input) return;

  listeningChecked = true;
  const correct = sentences[listeningIndex].text;
  const isCorrect = normalizeText(input) === normalizeText(correct);

  const fb = document.getElementById('listeningFeedback');
  fb.style.display = 'block';

  if (isCorrect) {
    state.listeningCorrect++;
    fb.className = 'listening-feedback correct-fb';
    fb.innerHTML = `✅ <strong>Chính xác!</strong> "${correct}"`;
  } else {
    state.listeningWrong++;
    fb.className = 'listening-feedback wrong-fb';
    fb.innerHTML = `❌ <strong>Chưa đúng.</strong><br>Bạn gõ: <em>"${input}"</em><br>Đáp án: <strong>"${correct}"</strong>`;
    state.listenErrors.push({ correct, userInput: input });
    saveState(state);
  }

  saveState(state);
  updateListeningStats();
  document.getElementById('hintArea').style.display = 'block';
});

document.getElementById('showHint').addEventListener('click', () => {
  const hintText = document.getElementById('hintText');
  if (hintText.style.display === 'none') {
    const words = sentences[listeningIndex].text.split(' ');
    const hint = words.map((w, i) => (i % 2 === 0 ? w : '_'.repeat(w.length))).join(' ');
    hintText.textContent = hint;
    hintText.style.display = 'block';
    document.getElementById('showHint').textContent = '🙈 Ẩn gợi ý';
  } else {
    hintText.style.display = 'none';
    document.getElementById('showHint').textContent = '💡 Hiện gợi ý';
  }
});

document.getElementById('prevListening').addEventListener('click', () => {
  listeningIndex = (listeningIndex - 1 + sentences.length) % sentences.length;
  renderListening();
});

document.getElementById('nextListening').addEventListener('click', () => {
  listeningIndex = (listeningIndex + 1) % sentences.length;
  renderListening();
});

// ── TRANSLATION ───────────────────────────────────────────────────────

const TRANSLATION_DATA = [
  {
    vi: "Cuộc họp đánh giá hiệu suất hàng năm đã được lên kế hoạch vào tuần tới.",
    en: "The annual performance appraisal has been scheduled for next week.",
    alts: ["The yearly performance review has been arranged for next week.", "The annual performance evaluation is scheduled for next week."],
    category: "Nhân sự",
    context: "Thông báo nội bộ công ty",
    tips: "• TẠI SAO 'has been scheduled' (hiện tại hoàn thành bị động)? Vì lịch vừa được sắp xếp và kết quả ĐÃ ẢNH HƯỞNG đến hiện tại — nhân viên cần biết để chuẩn bị. Bị động vì cuộc họp không tự lên lịch được.\n• 'scheduled FOR' (không phải 'scheduled ON') khi nói về sự kiện được sắp xếp cho một thời điểm.\n• 'Performance appraisal' = đánh giá hiệu suất (trang trọng hơn 'performance review')."
  },
  {
    vi: "Phòng pháp lý đang xem xét kỹ tất cả các điều khoản của hợp đồng trước khi ký.",
    en: "The legal department is meticulously reviewing all contractual terms prior to signing.",
    alts: ["The legal team is carefully examining all contract clauses before signing.", "The legal department is scrutinizing all terms of the contract before the signing."],
    category: "Pháp lý",
    context: "Cập nhật tiến độ cho ban quản lý",
    tips: "• TẠI SAO dùng 'is reviewing' (hiện tại tiếp diễn)? Vì việc xem xét đang diễn ra NGAY LÚC NÀY, chưa xong. Nếu dùng 'reviews' (hiện tại đơn) thì ngụ ý đây là thói quen thường xuyên, không phải hành động đang diễn ra.\n• 'meticulously' = một cách tỉ mỉ (trạng từ mạnh, TOEIC 800+ level)\n• 'prior to + V-ing' = trước khi (trang trọng hơn 'before')."
  },
  {
    vi: "Công ty đã không đạt được mục tiêu doanh thu quý này do chi phí vận hành tăng đột biến.",
    en: "The company failed to meet its revenue targets this quarter due to a surge in operational costs.",
    alts: ["The company did not achieve its revenue goals this quarter because of a sudden increase in operating expenses."],
    category: "Tài chính",
    context: "Báo cáo kết quả kinh doanh",
    tips: "• 'fail to meet targets' = không đạt mục tiêu (cụm từ kinh doanh chuẩn)\n• TẠI SAO dùng quá khứ đơn 'failed'? Vì đây là sự kiện ĐÃ HOÀN TẤT trong quý vừa qua — kết quả đã rõ ràng.\n• 'due to + N' = do/vì (không phải 'due to + S+V'; 'because of + N' là cách thay thế)\n• 'surge in operational costs' = chi phí vận hành tăng đột biến (surge = sự tăng đột ngột)."
  },
  {
    vi: "Chúng tôi xin lỗi vì sự bất tiện và đảm bảo rằng vấn đề này sẽ được giải quyết ngay lập tức.",
    en: "We apologize for the inconvenience and assure you that the matter will be resolved immediately.",
    alts: ["We are sorry for the inconvenience caused and guarantee that this issue will be addressed right away."],
    category: "Dịch vụ khách hàng",
    context: "Phản hồi khiếu nại của khách hàng",
    tips: "• 'apologize for + N/V-ing' = xin lỗi vì (NOT 'apologize because')\n• 'assure you that + S + V' = đảm bảo với bạn rằng (cụm từ chuyên nghiệp trong email)\n• 'will be resolved' (bị động tương lai) vì 'matter' là vật được giải quyết, không tự giải quyết được.\n• 'immediately' đứng cuối câu; tránh dùng 'right now' trong văn trang trọng."
  },
  {
    vi: "Đề xuất của bạn sẽ được trình bày trước hội đồng quản trị vào cuối tuần này.",
    en: "Your proposal will be presented to the board of directors at the end of this week.",
    alts: ["Your proposal is going to be submitted to the board of directors by the end of this week."],
    category: "Quản trị",
    context: "Email thông báo cho ứng viên/đối tác",
    tips: "• 'will be presented' (bị động tương lai đơn): đề xuất là vật được trình bày, không tự trình bày. Cấu trúc: will + be + V3.\n• 'board of directors' = hội đồng quản trị (luôn có 'of directors', không bỏ).\n• 'at the end of this week' vs 'by the end of this week': 'at' = đúng vào lúc cuối tuần; 'by' = trước hoặc vào lúc đó."
  },
  {
    vi: "Mặc dù ngân sách bị cắt giảm đáng kể, nhóm vẫn hoàn thành dự án đúng hạn.",
    en: "Although the budget was significantly reduced, the team managed to complete the project on time.",
    alts: ["Despite significant budget cuts, the team still managed to deliver the project on schedule.", "Even though the budget was cut considerably, the team completed the project on time."],
    category: "Quản lý dự án",
    context: "Báo cáo thành tích nhóm",
    tips: "• 'Although/Even though + S + V' vs 'Despite/In spite of + N/V-ing': đây là lỗi phổ biến nhất. 'Although the budget was reduced' (có chủ vị) ≠ 'Despite the budget reduction' (danh từ).\n• 'managed to + V' = cố gắng và thành công làm được gì. Nhấn mạnh NỖLỰC và KẾT QUẢ — khác với 'completed' (trung tính).\n• 'on time' = đúng giờ, đúng hạn; 'on schedule' = đúng tiến độ."
  },
  {
    vi: "Kể từ khi chiến lược giá mới được áp dụng, doanh số đã tăng 18% so với quý trước.",
    en: "Since the new pricing strategy was implemented, sales have increased by 18% compared to the previous quarter.",
    alts: ["Sales have risen by 18% since the implementation of the new pricing strategy last quarter."],
    category: "Kinh doanh",
    context: "Trình bày kết quả trong cuộc họp",
    tips: "• TẠI SAO 'have increased' (hiện tại hoàn thành)? Vì 'since + mốc quá khứ' (since the strategy was implemented) → sự việc bắt đầu trong quá khứ và TIẾP TỤC đến hiện tại. 'Increased' (quá khứ đơn) sẽ ngụ ý doanh số đã ngừng tăng.\n• 'increase BY 18%' (không phải 'increase TO 18%'): 'by' chỉ MỨC ĐỘ THAY ĐỔI; 'to' chỉ điểm đến cuối cùng.\n• 'compared to/with' = so với."
  },
  {
    vi: "Tôi muốn yêu cầu gia hạn thời hạn nộp báo cáo do khối lượng công việc tăng đột ngột.",
    en: "I would like to request an extension for the report submission deadline due to an unexpected increase in workload.",
    alts: ["I am writing to request a deadline extension for the report submission owing to a sudden surge in workload."],
    category: "Email công việc",
    context: "Gửi email cho cấp trên",
    tips: "• 'I would like to request' = cách xin phép lịch sự nhất trong email công sở (lịch sự hơn 'I want to ask').\n• 'request an extension FOR the deadline' = gia hạn CHO thời hạn (FOR chỉ đối tượng được gia hạn).\n• 'due to + N' = do (không phải 'due to the fact that + S+V'); 'due to an unexpected increase' = do sự gia tăng bất ngờ.\n• 'workload' = khối lượng công việc (không dịch thành 'amount of work' trong văn phòng)."
  },
  {
    vi: "Hợp đồng quy định rằng bên vi phạm phải chịu khoản phạt tương đương 10% giá trị hợp đồng.",
    en: "The contract stipulates that the breaching party shall incur a penalty equivalent to 10% of the contract value.",
    alts: ["The agreement specifies that the party in breach must pay a penalty equal to 10% of the total contract value."],
    category: "Pháp lý",
    context: "Điều khoản trong hợp đồng thương mại",
    tips: "• 'stipulate' = quy định, đề ra (động từ trang trọng dùng trong văn bản pháp lý)\n• 'shall' trong pháp lý = NGHĨA VỤ BẮT BUỘC (mạnh hơn 'will' thông thường)\n• 'incur a penalty' = phải chịu khoản phạt ('incur' thường đi với chi phí, hậu quả tiêu cực)\n• 'equivalent to' = tương đương với; 'equal to' cũng đúng nhưng 'equivalent to' trang trọng hơn."
  },
  {
    vi: "Nhà cung cấp đã không tuân thủ các tiêu chuẩn kiểm soát chất lượng được quy định trong thỏa thuận.",
    en: "The vendor failed to comply with the quality control standards stipulated in the agreement.",
    alts: ["The supplier did not adhere to the quality control requirements specified in the contract."],
    category: "Mua sắm",
    context: "Báo cáo vấn đề với nhà cung cấp",
    tips: "• 'fail to comply with' = không tuân thủ (cụm từ pháp lý/kinh doanh chuẩn)\n• 'comply with' = tuân thủ (KHÔNG dùng 'comply to'); tương tự: 'adhere to', 'abide by'\n• 'stipulated in the agreement' = mệnh đề quan hệ rút gọn (which was stipulated) → được quy định trong thỏa thuận\n• 'vendor' (nhà cung cấp dịch vụ/phần mềm) vs 'supplier' (nhà cung cấp hàng hóa)."
  },
  {
    vi: "Để hạn chế rủi ro tài chính, công ty đã đa dạng hóa danh mục đầu tư của mình.",
    en: "In order to mitigate financial risks, the company diversified its investment portfolio.",
    alts: ["To minimize financial exposure, the company has diversified its portfolio of investments."],
    category: "Tài chính",
    context: "Trình bày chiến lược đầu tư",
    tips: "• 'mitigate risks' = giảm thiểu rủi ro (TOEIC 770+; 'minimize' cũng đúng nhưng 'mitigate' chuyên nghiệp hơn trong tài chính)\n• 'In order to + V' = để (chính thức hơn 'to + V')\n• 'diversify' = đa dạng hóa; 'investment portfolio' = danh mục đầu tư\n• TẠI SAO quá khứ đơn 'diversified'? Đây là hành động đã hoàn tất trong quá khứ, mô tả quyết định đã được thực hiện."
  },
  {
    vi: "Ban giám đốc yêu cầu tất cả các bộ phận nộp báo cáo ngân sách trước cuối tháng.",
    en: "The management requires all departments to submit budget reports before the end of the month.",
    alts: ["Management has requested that all departments submit their budget reports by the end of the month."],
    category: "Quản lý",
    context: "Chỉ thị nội bộ công ty",
    tips: "• 'require + object + to + V' = yêu cầu ai đó làm gì (cấu trúc phổ biến nhất trong văn công sở)\n• 'before the end of the month' vs 'by the end of the month': 'before' = trước; 'by' = trước hoặc vào đúng ngày cuối — 'by' chuẩn hơn trong ngữ cảnh deadline.\n• 'management' (không có mạo từ 'the') khi dùng chung chung; dùng 'the management' khi chỉ cụ thể."
  },
  {
    vi: "Chiến lược mở rộng thị trường mới đã được chứng minh là mang lại lợi nhuận đáng kể.",
    en: "The new market expansion strategy has proven to be considerably lucrative.",
    alts: ["The market expansion strategy has proved to be highly profitable.", "The new expansion strategy has turned out to be remarkably lucrative."],
    category: "Kinh doanh",
    context: "Trình bày kết quả chiến lược",
    tips: "• 'prove to be + adj' = chứng tỏ/hóa ra là... (cụm cố định, 'prove to be' không thể bỏ 'to be')\n• TẠI SAO 'has proven' (hiện tại hoàn thành)? Kết quả từ quá khứ vẫn còn LIÊN QUAN đến hiện tại — chiến lược vẫn đang mang lại lợi nhuận.\n• 'lucrative' = sinh lợi nhuận cao (TOEIC 800+); trang trọng hơn 'profitable'\n• 'considerably/remarkably/highly + adj' = thêm trạng từ để diễn đạt mức độ."
  },
  {
    vi: "Nếu hợp đồng được ký kết trước thứ Sáu, chúng tôi có thể bắt đầu triển khai vào tuần sau.",
    en: "If the contract is signed before Friday, we can commence the implementation next week.",
    alts: ["Should the contract be signed by Friday, we will be able to begin implementation the following week."],
    category: "Hợp đồng",
    context: "Đàm phán hợp đồng với đối tác",
    tips: "• Câu điều kiện Loại 1 (If + present simple, will/can + V): diễn tả khả năng CÓ THỂ XẢY RA trong tương lai gần.\n• 'commence' = bắt đầu (trang trọng hơn 'start/begin' trong văn hợp đồng)\n• NÂNG CAO: 'Should the contract be signed...' = đảo ngữ lịch sự (Should + S + V3), thường dùng trong email/thư trang trọng để thay cho 'If...'\n• 'implementation' = quá trình triển khai (danh từ của 'implement')."
  },
  {
    vi: "Nhân viên mới được yêu cầu tham gia chương trình đào tạo hội nhập trong hai tuần đầu.",
    en: "New employees are required to attend the onboarding training program during their first two weeks.",
    alts: ["All new hires must participate in the onboarding program for their first two weeks."],
    category: "Nhân sự",
    context: "Chính sách đào tạo nhân viên mới",
    tips: "• 'be required to + V' = được yêu cầu phải làm gì (bị động, thể hiện quy định)\n• 'onboarding' = đào tạo hội nhập (hội nhập vào công ty/vị trí mới) — từ quan trọng trong HR\n• 'attend a program' = tham gia chương trình (KHÔNG dùng 'join a program' cho sự kiện có lịch cố định)\n• 'during their first two weeks' = trong hai tuần đầu tiên của họ ('during' cho khoảng thời gian)."
  },
  {
    vi: "Chúng tôi đang xem xét khả năng hợp tác với công ty địa phương để mở rộng mạng lưới phân phối.",
    en: "We are considering the possibility of collaborating with a local company to expand the distribution network.",
    alts: ["We are exploring the potential of partnering with a local firm to broaden our distribution channels."],
    category: "Chiến lược",
    context: "Họp chiến lược với ban lãnh đạo",
    tips: "• 'consider + V-ing' hoặc 'consider the possibility of + V-ing': 'consider' đi với GERUND (V-ing), KHÔNG đi với infinitive.\n• 'collaborate with' = hợp tác với (trang trọng hơn 'work with')\n• 'expand the distribution network' = mở rộng mạng lưới phân phối\n• TẠI SAO 'are considering' (tiếp diễn)? Vì đây là quá trình đang xem xét, chưa quyết định. 'Consider' (đơn) mang nghĩa thói quen hoặc đã quyết định."
  },
  {
    vi: "Kết quả kiểm toán cho thấy có sự chênh lệch đáng kể trong hồ sơ tài chính của công ty.",
    en: "The audit results revealed a significant discrepancy in the company's financial records.",
    alts: ["The audit findings indicated a considerable discrepancy within the company's financial documentation."],
    category: "Kiểm toán",
    context: "Báo cáo sau kiểm toán",
    tips: "• 'reveal' = tiết lộ, cho thấy (mạnh và trang trọng hơn 'show'); 'indicate' = chỉ ra\n• 'discrepancy' = sự chênh lệch, không khớp (TOEIC 800+; ví dụ: discrepancy between invoice and payment)\n• TẠI SAO quá khứ đơn 'revealed'? Kiểm toán đã hoàn tất và kết quả đã được ghi nhận — sự kiện đã kết thúc trong quá khứ.\n• 'financial records' = hồ sơ tài chính (records dạng số nhiều)."
  },
  {
    vi: "Tôi muốn trân trọng đề nghị được xem xét vào vị trí quản lý cấp cao trong công ty.",
    en: "I would like to respectfully apply for consideration for the senior management position in your company.",
    alts: ["I am writing to express my interest in being considered for the senior management role at your organization."],
    category: "Thư xin việc",
    context: "Email ứng tuyển vị trí quản lý",
    tips: "• 'I would like to + V' = cách mở đầu email/thư xin việc LỊCH SỰ và TRANG TRỌNG nhất\n• 'apply for a position' = nộp đơn ứng tuyển vào vị trí\n• 'senior management position' = vị trí quản lý cấp cao ('senior' = cấp cao, nhiều kinh nghiệm)\n• NÂNG CAO: 'I am writing to express my interest in...' = cách diễn đạt trang trọng hơn trong thư xin việc chuyên nghiệp."
  },
  {
    vi: "Toàn bộ chi phí đi lại và ăn ở trong chuyến công tác sẽ được hoàn trả trong vòng hai tuần.",
    en: "All travel and accommodation expenses incurred during the business trip will be reimbursed within two weeks.",
    alts: ["Travel and lodging costs from the business trip will be refunded within a two-week period."],
    category: "Tài chính",
    context: "Chính sách hoàn tiền công tác",
    tips: "• 'incurred during' = phát sinh trong (mệnh đề quan hệ rút gọn: expenses which were incurred)\n• 'reimburse' = hoàn tiền (TOEIC 770+; trang trọng hơn 'refund' trong bối cảnh công ty hoàn chi phí cho nhân viên)\n• 'within two weeks' = trong vòng hai tuần (within = không quá khoảng thời gian đó)\n• TẠI SAO bị động 'will be reimbursed'? Vì chi phí là đối tượng được hoàn trả bởi công ty."
  },
  {
    vi: "Thỏa thuận mua lại này dự kiến sẽ tạo ra khoản tiết kiệm chi phí đáng kể cho cả hai bên.",
    en: "This acquisition agreement is expected to generate significant cost savings for both parties.",
    alts: ["The acquisition deal is anticipated to produce considerable cost efficiencies for both organizations."],
    category: "Mua bán & Sáp nhập",
    context: "Thông cáo báo chí M&A",
    tips: "• 'be expected to + V' = được kỳ vọng sẽ (bị động, văn phong báo chí và kinh doanh chuyên nghiệp)\n• 'generate cost savings' = tạo ra khoản tiết kiệm chi phí (cụm từ M&A chuẩn)\n• 'acquisition agreement' = thỏa thuận mua lại; 'merger' = sáp nhập (hai bên hợp nhất)\n• 'both parties' = cả hai bên (trang trọng hơn 'both sides' trong văn pháp lý)."
  },
  {
    vi: "Vui lòng đảm bảo rằng tất cả tài liệu liên quan được nộp trước thời hạn quy định trong hợp đồng.",
    en: "Please ensure that all relevant documents are submitted prior to the deadline specified in the contract.",
    alts: ["Kindly make sure that all pertinent documents are filed before the contractual deadline."],
    category: "Hành chính",
    context: "Email nhắc nhở đối tác/khách hàng",
    tips: "• 'ensure that + S + V' = đảm bảo rằng (trang trọng hơn 'make sure that')\n• 'relevant documents' = tài liệu liên quan; 'pertinent' = liên quan, thích hợp (từ trang trọng hơn)\n• 'prior to + N/V-ing' = trước (trang trọng hơn 'before'): prior to the deadline\n• 'specified in the contract' = rút gọn của 'which is specified in...' (mệnh đề quan hệ bị động rút gọn)."
  },
  {
    vi: "Sự thiếu minh bạch trong quá trình ra quyết định đã khiến nhiều cổ đông lo ngại.",
    en: "The lack of transparency in the decision-making process has caused concern among many shareholders.",
    alts: ["A lack of transparency in the decision-making process has raised concerns among numerous shareholders."],
    category: "Quản trị",
    context: "Báo cáo đại hội cổ đông",
    tips: "• TẠI SAO 'has caused' (hiện tại hoàn thành)? Sự thiếu minh bạch trong quá khứ VẪN CÒN GÂY LO NGẠI cho cổ đông ở hiện tại — tác động chưa chấm dứt.\n• 'transparency in + N' = sự minh bạch trong; 'decision-making process' = quá trình ra quyết định (có gạch ngang)\n• 'cause/raise concern among' = gây lo ngại cho; 'shareholders' = cổ đông."
  },
  {
    vi: "Chương trình thực tập sinh quản lý được thiết kế để phát triển các nhà lãnh đạo tương lai cho tổ chức.",
    en: "The management trainee program is designed to develop future leaders for the organization.",
    alts: ["The graduate management trainee program aims to cultivate the next generation of leaders within the company."],
    category: "Nhân sự",
    context: "Giới thiệu chương trình tuyển dụng",
    tips: "• 'be designed to + V' = được thiết kế để (bị động; 'aim to + V' = nhằm mục đích)\n• 'management trainee' = thực tập sinh quản lý/nhân viên quản lý tập sự\n• 'develop future leaders' = phát triển các nhà lãnh đạo tương lai\n• NÂNG CAO: 'cultivate the next generation of leaders' = nuôi dưỡng thế hệ lãnh đạo tiếp theo (từ ngữ phong phú hơn)."
  },
  {
    vi: "Phòng nhân sự đang tiến hành quy trình tuyển dụng nghiêm ngặt để tìm ứng viên phù hợp nhất.",
    en: "The HR department is conducting a rigorous recruitment process to identify the most suitable candidate.",
    alts: ["The human resources team is carrying out a stringent selection process to find the best-fit candidate."],
    category: "Nhân sự",
    context: "Cập nhật tiến trình tuyển dụng",
    tips: "• 'conduct a process' = tiến hành quy trình; 'carry out' = thực hiện (đồng nghĩa)\n• 'rigorous' = nghiêm ngặt, chặt chẽ (TOEIC 800+); 'stringent' = nghiêm khắc (cùng nghĩa)\n• TẠI SAO 'is conducting' (tiếp diễn)? Quy trình đang diễn ra, chưa kết thúc — nếu dùng 'conducts' (đơn) thì nghe như thói quen thường xuyên.\n• 'identify the most suitable candidate' = xác định/tìm ứng viên phù hợp nhất."
  },
  {
    vi: "Chúng tôi đánh giá cao sự hợp tác của quý khách và mong muốn tiếp tục mối quan hệ đối tác lâu dài.",
    en: "We value your collaboration and look forward to maintaining a long-term partnership.",
    alts: ["We greatly appreciate your cooperation and hope to continue our long-term business relationship."],
    category: "Quan hệ đối tác",
    context: "Email kết thúc cuộc họp/dự án",
    tips: "• 'value' = trân trọng, đánh giá cao (trang trọng hơn 'appreciate' trong ngữ cảnh đối tác lâu dài)\n• 'look forward to + V-ing' (KHÔNG phải 'look forward to + V'): 'to' ở đây là GIỚI TỪ, nên theo sau phải là danh từ hoặc V-ing.\n• 'long-term partnership' = mối quan hệ đối tác lâu dài (có gạch ngang khi là tính từ ghép)."
  },
  {
    vi: "Nếu ban quản lý đã hành động sớm hơn, công ty đã không phải đối mặt với cuộc khủng hoảng tài chính.",
    en: "If the management had acted sooner, the company would not have faced such a financial crisis.",
    alts: ["Had the management acted earlier, the company would not have encountered this financial crisis."],
    category: "Phân tích",
    context: "Đánh giá hậu quả quyết định kinh doanh",
    tips: "• Câu điều kiện Loại 3 (If + past perfect, would/could have + V3): điều KHÔNG THẬT trong QUÁ KHỨ. Ban quản lý KHÔNG hành động sớm → công ty GặP KHỦNG HOẢNG.\n• 'had acted sooner' = past perfect trong mệnh đề If\n• 'would not have faced' = would + not + have + V3 trong mệnh đề chính\n• NÂNG CAO: 'Had the management acted...' = đảo ngữ loại 3 (bỏ 'If', đảo 'had' lên đầu) — rất phổ biến trong văn phong trang trọng."
  },
  {
    vi: "Báo cáo nêu rõ rằng chi phí vận hành đã vượt quá ngân sách được phê duyệt 20%.",
    en: "The report indicated that operational costs had exceeded the approved budget by 20%.",
    alts: ["The report stated that operating expenses had surpassed the allocated budget by 20%."],
    category: "Tài chính",
    context: "Tóm tắt báo cáo tài chính",
    tips: "• CÂU TƯỜNG THUẬT: 'indicated that + past perfect' — vì động từ tường thuật 'indicated' ở QUÁ KHỨ và sự việc chi phí vượt ngân sách xảy ra TRƯỚC đó → dùng past perfect 'had exceeded'.\n• 'exceed the budget BY 20%' = vượt quá ngân sách 20% (BY chỉ mức độ chênh lệch, không phải 'over').\n• 'operational costs' = chi phí vận hành; 'operating expenses' = chi phí hoạt động (đồng nghĩa)."
  },
  {
    vi: "Việc triển khai hệ thống phần mềm mới đòi hỏi sự phối hợp chặt chẽ giữa các phòng ban.",
    en: "The implementation of the new software system requires close coordination among departments.",
    alts: ["Deploying the new software system necessitates tight coordination between all relevant departments."],
    category: "Công nghệ thông tin",
    context: "Họp kick-off dự án IT",
    tips: "• 'implementation' = quá trình triển khai (danh từ từ 'implement'); dùng 'The implementation of + N' khi làm chủ ngữ.\n• 'require + N/V-ing' = đòi hỏi; 'necessitate + V-ing' = cần thiết phải (trang trọng hơn)\n• 'coordination among departments' (nhiều phòng ban) vs 'coordination between two teams' (hai nhóm cụ thể)\n• TẠI SAO hiện tại đơn 'requires'? Đây là SỰ THẬT CHUNG về tính chất của việc triển khai, không phải hành động đang diễn ra."
  },
  {
    vi: "Đây là lần đầu tiên công ty ghi nhận mức tăng trưởng doanh thu chưa từng có trong lịch sử.",
    en: "This is the first time the company has recorded unprecedented revenue growth in its history.",
    alts: ["It is the first time the company has achieved such unprecedented growth in revenue throughout its history."],
    category: "Kinh doanh",
    context: "Thông báo kết quả kinh doanh xuất sắc",
    tips: "• 'This is the first time + S + has/have + V3' (hiện tại hoàn thành): cấu trúc CỐ ĐỊNH. Không được dùng 'This is the first time the company recorded' (quá khứ đơn) — SAI ngữ pháp.\n• 'unprecedented' = chưa từng có, không có tiền lệ (TOEIC 800+)\n• 'record revenue growth' = ghi nhận mức tăng trưởng doanh thu\n• 'in its history' = trong lịch sử (của công ty) — cần 'its' để rõ nghĩa."
  },
  {
    vi: "Chiến lược mua sắm của chúng tôi nhằm mục đích xây dựng mối quan hệ lâu dài với các nhà cung cấp đáng tin cậy.",
    en: "Our procurement strategy aims to build long-term relationships with reliable vendors.",
    alts: ["Our sourcing strategy is designed to foster enduring partnerships with trusted suppliers."],
    category: "Mua sắm",
    context: "Trình bày chiến lược chuỗi cung ứng",
    tips: "• 'procurement strategy' = chiến lược mua sắm/thu mua (từ chuyên ngành TOEIC)\n• 'aim to + V' = nhằm mục đích; 'be designed to + V' = được thiết kế để\n• 'long-term relationships with vendors' = mối quan hệ lâu dài với nhà cung cấp\n• NÂNG CAO: 'foster enduring partnerships with trusted suppliers' — dùng 'foster' (nuôi dưỡng, phát triển), 'enduring' (lâu bền), 'trusted' (đáng tin cậy) để viết phong phú hơn."
  },
  {
    vi: "Ủy ban kiểm toán đã tiến hành xem xét kỹ lưỡng tất cả giao dịch tài chính trong năm qua.",
    en: "The audit committee conducted a thorough review of all financial transactions over the past year.",
    alts: ["The audit committee carried out an exhaustive examination of every financial transaction throughout the previous year."],
    category: "Kiểm toán",
    context: "Biên bản họp ban kiểm toán",
    tips: "• 'conduct a review' = tiến hành xem xét; 'carry out an examination' = thực hiện kiểm tra\n• 'thorough' = kỹ lưỡng, toàn diện; 'exhaustive' = cực kỳ toàn diện, đầy đủ\n• TẠI SAO quá khứ đơn 'conducted'? Việc kiểm toán đã HOÀN TẤT — đây là sự kiện có điểm kết thúc rõ ràng trong quá khứ.\n• 'over the past year' = trong năm qua (khoảng thời gian vừa kết thúc)."
  },
  {
    vi: "Vui lòng xác nhận rằng quý vị đã nhận được và đọc kỹ các điều khoản trong tài liệu đính kèm.",
    en: "Please confirm that you have received and thoroughly reviewed the terms outlined in the attached document.",
    alts: ["Kindly acknowledge receipt of and confirm that you have carefully read through the terms in the enclosed document."],
    category: "Email",
    context: "Email gửi kèm hợp đồng/thỏa thuận",
    tips: "• 'Please confirm that + S + have + V3' (hiện tại hoàn thành): yêu cầu xác nhận hành động đã làm — đã nhận VÀ đã đọc (kết quả tác động đến hiện tại).\n• 'outlined in the attached document' = rút gọn của 'which are outlined in...'\n• 'thoroughly reviewed' (đọc kỹ) vs 'quickly scanned' (đọc lướt)\n• NÂNG CAO: 'Kindly acknowledge receipt of' = xác nhận đã nhận được (trang trọng nhất trong email thương mại)."
  },
  {
    vi: "Quyết định tái cơ cấu tổ chức được đưa ra nhằm nâng cao hiệu quả hoạt động và giảm thiểu chi phí.",
    en: "The decision to restructure the organization was made to enhance operational efficiency and minimize costs.",
    alts: ["The organizational restructuring decision was aimed at improving operational effectiveness and reducing expenditures."],
    category: "Chiến lược",
    context: "Thông báo tái cơ cấu công ty",
    tips: "• 'restructure the organization' = tái cơ cấu tổ chức; 'organizational restructuring' = sự tái cơ cấu\n• 'was made to + V' = được đưa ra để (bị động quá khứ + mục đích)\n• 'enhance operational efficiency' = nâng cao hiệu quả vận hành; 'improve operational effectiveness' = đồng nghĩa\n• 'minimize costs' = giảm thiểu chi phí ('reduce expenditures' trang trọng hơn trong báo cáo tài chính)."
  },

  // ─── Logistics ─────────────────────────────────────────────────────
  {
    vi: "Lô hàng đang được vận chuyển và dự kiến đến kho trong vòng 3-5 ngày làm việc.",
    en: "The shipment is in transit and is expected to arrive at the warehouse within 3 to 5 business days.",
    alts: ["The consignment is currently being transported and should reach the warehouse in 3 to 5 working days."],
    category: "Logistics",
    context: "Thông báo tình trạng đơn hàng",
    tips: "• 'in transit' = đang trên đường vận chuyển (cụm từ logistics chuẩn)\n• 'be expected to + V' (bị động) = được dự kiến sẽ; nhấn mạnh kỳ vọng/ước tính\n• 'business days' = ngày làm việc (khác với 'calendar days' = ngày theo lịch)\n• 'shipment' = lô hàng đang được giao."
  },
  {
    vi: "Vui lòng cung cấp số vận đơn để chúng tôi có thể theo dõi tình trạng đơn hàng của bạn.",
    en: "Please provide your tracking number so that we can monitor the status of your shipment.",
    alts: ["Kindly share your waybill number so we can track the delivery status for you."],
    category: "Logistics",
    context: "Dịch vụ khách hàng vận chuyển",
    tips: "• 'tracking number' = mã vận đơn (số theo dõi đơn hàng)\n• 'so that + S + can + V' = để (mệnh đề mục đích — trang trọng hơn chỉ dùng 'to')\n• 'monitor the status' = theo dõi tình trạng; 'track' = theo dõi hành trình\n• 'waybill' = vận đơn đường bộ; 'Bill of Lading (B/L)' = vận đơn hàng hải."
  },
  {
    vi: "Hàng hóa đã thông quan và sẽ được giao đến địa điểm của bạn vào sáng thứ Hai.",
    en: "The goods have cleared customs and will be delivered to your location on Monday morning.",
    alts: ["The cargo has passed through customs clearance and is scheduled for delivery to your premises on Monday morning."],
    category: "Logistics",
    context: "Cập nhật tình trạng thông quan",
    tips: "• 'clear customs' = thông quan (cụm từ logistics bắt buộc phải biết)\n• TẠI SAO 'have cleared' (hiện tại hoàn thành)? Hàng VỪA XONG thông quan và kết quả ảnh hưởng đến kế hoạch giao hàng hiện tại.\n• 'deliver to your location/premises' = giao đến địa điểm (premises trang trọng hơn)\n• 'on Monday morning' — dùng 'on' với ngày cụ thể."
  },
  {
    vi: "Chi phí vận chuyển hàng hóa từ Việt Nam sang Đức bao gồm cả phí hải quan và bảo hiểm.",
    en: "The freight charges from Vietnam to Germany include customs duties and insurance fees.",
    alts: ["The shipping costs from Vietnam to Germany cover both customs tariffs and insurance premiums."],
    category: "Logistics",
    context: "Báo giá vận chuyển quốc tế",
    tips: "• 'freight charges' = phí vận chuyển hàng hóa (freight = hàng hóa vận chuyển/phí vận tải)\n• 'include' vs 'cover': 'include' = bao gồm trong tổng; 'cover' = chi trả, bao phủ\n• 'customs duties' = thuế hải quan; 'customs tariffs' = biểu thuế hải quan\n• 'insurance premiums' = phí bảo hiểm (từ chuyên ngành bảo hiểm chuẩn)."
  },
  {
    vi: "Chúng tôi cần xác nhận đơn hàng này trước 12 giờ trưa ngày mai để đảm bảo giao hàng đúng hạn.",
    en: "We need to confirm this order before noon tomorrow to ensure on-time delivery.",
    alts: ["This order must be confirmed by 12:00 PM tomorrow to guarantee timely delivery."],
    category: "Logistics",
    context: "Đặt hàng với nhà cung cấp",
    tips: "• 'confirm an order' = xác nhận đơn hàng\n• 'before noon' = trước 12 giờ trưa; 'by noon' = muộn nhất là 12 giờ trưa\n• 'on-time delivery' = giao hàng đúng hạn (có gạch ngang khi là tính từ ghép)\n• 'ensure' = đảm bảo (hành động phòng ngừa); 'guarantee' = đảm bảo (cam kết mạnh hơn)."
  },

  // ─── Healthcare ─────────────────────────────────────────────────────
  {
    vi: "Tôi muốn đặt lịch khám với bác sĩ tim mạch vào tuần tới nếu có thể.",
    en: "I would like to schedule an appointment with a cardiologist next week if possible.",
    alts: ["I'd like to book a consultation with a cardiologist for next week, if there is availability."],
    category: "Y tế",
    context: "Gọi điện đặt lịch khám bệnh",
    tips: "• 'schedule an appointment with a doctor' = đặt lịch hẹn với bác sĩ (chuẩn Anh-Mỹ)\n• 'cardiologist' = bác sĩ tim mạch; 'dermatologist' = da liễu; 'orthopedist' = chỉnh hình\n• 'if possible/if there is availability' = nếu có thể/nếu có chỗ trống — thêm để lịch sự hơn\n• 'book a consultation' (Anh-Anh) vs 'schedule an appointment' (Anh-Mỹ): đều đúng."
  },
  {
    vi: "Kết quả xét nghiệm máu của bạn đã sẵn sàng. Bác sĩ sẽ liên hệ để giải thích chi tiết.",
    en: "Your blood test results are ready. The doctor will contact you to explain the findings in detail.",
    alts: ["Your lab results are now available. The physician will reach out to discuss the findings with you."],
    category: "Y tế",
    context: "Thông báo kết quả xét nghiệm",
    tips: "• 'blood test results' = kết quả xét nghiệm máu; 'lab results' = kết quả xét nghiệm phòng lab\n• 'contact you to explain' = liên hệ để giải thích ('to explain' chỉ mục đích)\n• 'findings' (số nhiều) = kết quả/phát hiện y khoa (trang trọng hơn 'results')\n• 'reach out' (phi chính thức) vs 'contact' (trang trọng hơn trong thông báo bệnh viện)."
  },
  {
    vi: "Bác sĩ đã kê đơn thuốc kháng sinh trong 7 ngày và khuyên tôi nghỉ ngơi hoàn toàn.",
    en: "The doctor prescribed a 7-day course of antibiotics and recommended complete bed rest.",
    alts: ["The physician prescribed antibiotics for 7 days and advised full rest."],
    category: "Y tế",
    context: "Mô tả tình trạng sau khám bệnh",
    tips: "• 'prescribe antibiotics' = kê đơn kháng sinh; 'a course of antibiotics' = một đợt kháng sinh\n• 'recommend + V-ing hoặc N': 'recommended complete rest' (danh từ) ✓\n• 'bed rest' = nằm nghỉ tại giường (cụm từ y tế chuẩn)\n• TẠI SAO quá khứ đơn 'prescribed'? Việc đã xảy ra tại phòng khám, sự kiện đã kết thúc."
  },
  {
    vi: "Tôi bị đau đầu và sốt nhẹ từ hôm qua. Tôi có thể gặp bác sĩ hôm nay không?",
    en: "I have been experiencing headaches and a mild fever since yesterday. Is it possible to see a doctor today?",
    alts: ["I've had a headache and a slight fever since yesterday. Can I get an appointment with a doctor today?"],
    category: "Y tế",
    context: "Đến phòng khám/cấp cứu",
    tips: "• TẠI SAO 'have been experiencing' (hiện tại hoàn thành tiếp diễn)? Vì triệu chứng bắt đầu từ HÔMBQUA và VẪN TIẾP TỤC đến bây giờ — dùng 'since yesterday'.\n• 'mild/slight fever' = sốt nhẹ; 'high fever' = sốt cao\n• 'Is it possible to see a doctor?' = lịch sự hơn 'Can I see a doctor?'\n• 'I have a headache' = đau đầu (luôn dùng 'a' trước headache)."
  },

  // ─── Thời tiết ───────────────────────────────────────────────────────
  {
    vi: "Theo dự báo thời tiết, sẽ có mưa to kèm sấm sét vào chiều nay. Bạn nên mang theo ô.",
    en: "According to the weather forecast, there will be heavy rain with thunder this afternoon. You should bring an umbrella.",
    alts: ["The weather forecast predicts heavy thunderstorms this afternoon. It is advisable to carry an umbrella."],
    category: "Thời tiết",
    context: "Trò chuyện hàng ngày / cảnh báo thời tiết",
    tips: "• 'According to the weather forecast' = theo dự báo thời tiết (cụm mở đầu chuẩn)\n• 'heavy rain' = mưa to; 'drizzle' = mưa phùn; 'thunderstorm' = giông sét\n• 'You should + V' = lời khuyên nhẹ; 'It is advisable to + V' = khuyên bảo trang trọng hơn\n• 'bring an umbrella' (Mỹ) = 'carry an umbrella' (Anh): đều đúng."
  },
  {
    vi: "Thời tiết hôm nay rất thuận lợi cho việc đi dã ngoại. Nhiệt độ khoảng 25 độ và trời quang đãng.",
    en: "The weather today is perfect for a picnic. The temperature is around 25 degrees and the sky is clear.",
    alts: ["Today's weather is ideal for an outdoor picnic, with temperatures of about 25 degrees and clear skies."],
    category: "Thời tiết",
    context: "Lên kế hoạch cuối tuần",
    tips: "• 'perfect/ideal for + N/V-ing' = hoàn hảo/lý tưởng cho\n• 'The temperature is around 25 degrees' = nhiệt độ khoảng 25 độ\n• 'clear sky' = trời quang đãng; 'partly cloudy' = có mây rải rác; 'overcast' = u ám\n• Thứ tự mô tả thời tiết: nhiệt độ → mây/nắng → gió → khả năng mưa."
  },
  {
    vi: "Do bão, chuyến bay của chúng tôi đã bị hủy. Chúng tôi cần đặt lại vé cho ngày hôm sau.",
    en: "Due to the typhoon, our flight has been cancelled. We need to rebook for the following day.",
    alts: ["Because of the storm, our flight was cancelled and we need to make new reservations for the next day."],
    category: "Thời tiết",
    context: "Gián đoạn do thời tiết xấu",
    tips: "• 'Due to + N' = do, vì (KHÔNG dùng 'due to + S+V'); 'Because of + N' = cũng được\n• TẠI SAO 'has been cancelled' (hiện tại hoàn thành)? Chuyến bay VỪA bị hủy và kết quả ảnh hưởng trực tiếp đến hiện tại.\n• 'rebook' = đặt lại; 'make a reservation' = đặt chỗ/đặt vé\n• 'the following day/the next day' = ngày hôm sau (tương đương nhau)."
  },

  // ─── Giao thông ──────────────────────────────────────────────────────
  {
    vi: "Có tai nạn giao thông trên đường Nguyễn Huệ. Lưu lượng xe đang bị ùn tắc nghiêm trọng.",
    en: "There has been a traffic accident on Nguyen Hue Street. Traffic is severely congested.",
    alts: ["A traffic accident on Nguyen Hue Street is causing severe congestion in the area."],
    category: "Giao thông",
    context: "Thông báo tình hình giao thông",
    tips: "• TẠI SAO 'There has been' (hiện tại hoàn thành)? Vụ tai nạn vừa xảy ra và ĐANG ẢNH HƯỞNG đến giao thông hiện tại.\n• 'Traffic is congested/backed up' = giao thông ùn tắc; 'traffic jam' = kẹt xe (danh từ)\n• 'severely/heavily congested' = ùn tắc nghiêm trọng\n• 'in the area' = trong khu vực đó."
  },
  {
    vi: "Tuyến xe buýt số 36 sẽ thay đổi lộ trình tạm thời do đường đang được sửa chữa.",
    en: "Bus route 36 will temporarily change its route due to road repairs on Le Loi Street.",
    alts: ["The No. 36 bus route is temporarily being diverted because of road maintenance on Le Loi Street."],
    category: "Giao thông",
    context: "Thông báo thay đổi lịch trình xe buýt",
    tips: "• 'Bus route' = tuyến xe buýt\n• 'temporarily' = tạm thời (trạng từ đặt trước động từ chính hoặc sau will)\n• 'due to road repairs/maintenance' = do đường đang được sửa chữa (repairs là danh từ)\n• 'diverted' = bị chuyển hướng (route diverted = lộ trình bị thay đổi tạm thời)."
  },
  {
    vi: "Tôi thường mất khoảng 45 phút để đi từ nhà đến văn phòng bằng tàu điện vào giờ cao điểm.",
    en: "It usually takes me about 45 minutes to commute from home to the office by subway during rush hour.",
    alts: ["My commute from home to the office by metro typically takes around 45 minutes during peak hours."],
    category: "Giao thông",
    context: "Mô tả hành trình đi làm hàng ngày",
    tips: "• 'It takes + me + time + to + V' = mất ... thời gian để làm gì (cấu trúc cố định)\n• 'commute' (v/n) = đi lại hàng ngày giữa nhà và nơi làm\n• 'rush hour' (Mỹ) = 'peak hour(s)' (Anh) = giờ cao điểm\n• 'subway' (Mỹ) = 'metro/underground/tube' (Anh) = tàu điện ngầm."
  },

  // ─── Khách sạn ───────────────────────────────────────────────────────
  {
    vi: "Tôi muốn đặt một phòng đôi có view biển cho 3 đêm từ ngày 10 đến ngày 13 tháng 6.",
    en: "I would like to book a double room with an ocean view for 3 nights from June 10th to June 13th.",
    alts: ["I'd like to reserve a double room with a sea view for three nights, checking in on June 10th and checking out on June 13th."],
    category: "Khách sạn",
    context: "Đặt phòng khách sạn qua điện thoại/email",
    tips: "• 'book/reserve a room' = đặt phòng ('book' thông dụng hơn trong tiếng Anh hàng ngày)\n• 'double room' = phòng đôi (1 giường đôi); 'twin room' = phòng 2 giường đơn\n• 'ocean view' (Mỹ) = 'sea view' (Anh) = phòng nhìn ra biển\n• 'from June 10th to June 13th' = check-in ngày 10, check-out ngày 13 (3 đêm)."
  },
  {
    vi: "Tôi muốn xác nhận đặt phòng của mình. Mã xác nhận của tôi là HV20240610.",
    en: "I would like to confirm my reservation. My confirmation number is HV20240610.",
    alts: ["I'd like to verify my hotel booking. My booking reference is HV20240610."],
    category: "Khách sạn",
    context: "Xác nhận đặt phòng trước khi nhận phòng",
    tips: "• 'confirm a reservation' = xác nhận đặt phòng; 'booking' và 'reservation' đều đúng\n• 'confirmation number' = mã xác nhận; 'booking reference' = mã đặt phòng (Anh-Anh)\n• 'I would like to + V' là cách bắt đầu yêu cầu lịch sự nhất\n• Khi gọi điện khách sạn: chuẩn bị tên, ngày nhận/trả phòng, mã xác nhận."
  },
  {
    vi: "Phòng tôi thiếu khăn tắm và máy sấy tóc bị hỏng. Anh có thể gửi người lên kiểm tra không?",
    en: "My room is missing towels and the hairdryer is broken. Could you please send someone up to check?",
    alts: ["The towels in my room are insufficient and the hair dryer is not working. Can you send a staff member to assist?"],
    category: "Khách sạn",
    context: "Phản ánh vấn đề tại phòng khách sạn",
    tips: "• 'is missing + N' = thiếu (mô tả sự vắng mặt của vật gì đó)\n• 'broken' = hỏng; 'not working' = không hoạt động (nhẹ hơn, phổ biến hơn)\n• 'Could you please + V?' = yêu cầu lịch sự; 'send someone up' = gửi nhân viên lên (phòng)\n• 'assist' = hỗ trợ (trang trọng hơn 'help' trong ngữ cảnh khách sạn)."
  },

  // ─── Du lịch ────────────────────────────────────────────────────────
  {
    vi: "Tôi cần nộp đơn xin visa du lịch ít nhất 3 tuần trước ngày khởi hành dự kiến.",
    en: "I need to submit my tourist visa application at least 3 weeks before my intended departure date.",
    alts: ["A tourist visa application should be filed no later than 3 weeks prior to the planned travel date."],
    category: "Du lịch",
    context: "Chuẩn bị thủ tục xin visa",
    tips: "• 'submit a visa application' = nộp đơn xin visa (submit trang trọng hơn 'apply for')\n• 'tourist visa' = visa du lịch; 'business visa' = visa công tác; 'transit visa' = visa quá cảnh\n• 'at least 3 weeks before' vs 'no later than 3 weeks prior to': cùng nghĩa, cách sau trang trọng hơn\n• 'intended/planned departure date' = ngày khởi hành dự kiến."
  },
  {
    vi: "Chuyến bay của chúng tôi bị trễ 2 tiếng. Hãng hàng không đã sắp xếp bữa ăn nhẹ cho hành khách.",
    en: "Our flight was delayed by 2 hours. The airline has arranged light refreshments for passengers at the airport.",
    alts: ["Our flight experienced a 2-hour delay, and the airline provided snacks and drinks for passengers."],
    category: "Du lịch",
    context: "Thông báo chậm trễ chuyến bay",
    tips: "• 'delayed BY 2 hours' = trễ 2 tiếng (BY chỉ mức độ); 'delayed FOR 2 hours' = không đúng\n• TẠI SAO 'has arranged' (hiện tại hoàn thành)? Hãng hàng không VỪA sắp xếp và đồ ăn hiện đang CÓ SẴN.\n• 'light refreshments' = đồ ăn nhẹ (bánh snack, nước uống); 'meal voucher' = phiếu bữa ăn\n• 'airline' = hãng hàng không; 'carrier' = đơn vị vận chuyển (trang trọng hơn)."
  },
  {
    vi: "Bạn có thể đề xuất một nhà hàng ngon gần đây không? Chúng tôi thích thử ẩm thực địa phương.",
    en: "Could you recommend a good restaurant nearby? We enjoy trying local cuisine.",
    alts: ["Can you suggest a nearby restaurant? We are interested in experiencing local food."],
    category: "Du lịch",
    context: "Hỏi người địa phương gợi ý nhà hàng",
    tips: "• 'recommend + N/V-ing' (KHÔNG phải 'recommend to + V'): 'Could you recommend a restaurant?'\n• 'nearby' = gần đây (tính từ/trạng từ); 'near here' = gần đây (cụm giới từ)\n• 'enjoy + V-ing' = thích làm gì; 'enjoy trying local cuisine' = thích thử ẩm thực địa phương\n• 'local cuisine' trang trọng hơn 'local food'; 'cuisine' = nền ẩm thực."
  },

  // ─── Mua sắm ─────────────────────────────────────────────────────────
  {
    vi: "Xin lỗi, dầu ô liu hữu cơ ở đây không? Tôi đã tìm khắp khu hàng thực phẩm nhưng không thấy.",
    en: "Excuse me, do you have organic olive oil here? I have been looking all over the food section but cannot find it.",
    alts: ["Pardon me, where can I find organic olive oil? I have searched through the entire food aisle without success."],
    category: "Mua sắm",
    context: "Hỏi nhân viên siêu thị",
    tips: "• 'Excuse me' = xin lỗi để hỏi thăm; 'Pardon me' = trang trọng hơn\n• 'organic' = hữu cơ; 'olive oil' = dầu ô liu\n• TẠI SAO 'have been looking' (hiện tại hoàn thành tiếp diễn)? Tôi bắt đầu tìm từ khi vào siêu thị và VẪN ĐANG tìm — nhấn mạnh quá trình liên tục.\n• 'food section/aisle' = khu hàng thực phẩm/dãy hàng thực phẩm."
  },
  {
    vi: "Tôi muốn trả lại sản phẩm này vì nó bị lỗi. Tôi có thể đổi sang sản phẩm khác không?",
    en: "I would like to return this product because it is defective. Can I exchange it for a different one?",
    alts: ["I'd like to return this item as it has a defect. Is it possible to swap it for another product?"],
    category: "Mua sắm",
    context: "Đổi trả hàng tại siêu thị/cửa hàng",
    tips: "• 'return a product' = trả lại sản phẩm; 'refund' = hoàn tiền; 'exchange/swap' = đổi\n• 'defective' = bị lỗi (tính từ); 'has a defect' = có lỗi (danh từ)\n• 'exchange it for a different one' = đổi lấy cái khác ('for' + đối tượng nhận về)\n• Khi đổi trả: luôn cầm theo 'receipt' = hóa đơn và kiểm tra 'return policy' = chính sách đổi trả."
  },
  {
    vi: "Giá của mặt hàng này trên kệ khác với giá trên hóa đơn. Bạn có thể kiểm tra lại không?",
    en: "The price of this item on the shelf is different from the price on the receipt. Could you please check?",
    alts: ["The shelf price and the charged price on my receipt don't match. Can you verify this for me?"],
    category: "Mua sắm",
    context: "Phát hiện sai giá tại siêu thị",
    tips: "• 'shelf price' = giá trên kệ; 'receipt' = hóa đơn thanh toán\n• 'different from' (KHÔNG phải 'different to/than' trong Anh-Mỹ chuẩn): A is different FROM B\n• 'Could you please check?' = yêu cầu lịch sự nhất; 'verify' = xác minh (trang trọng)\n• Khi phát hiện sai sót: bình tĩnh, đưa bằng chứng (hóa đơn), yêu cầu kiểm tra lại."
  },

  // ─── Giao tiếp hàng ngày ─────────────────────────────────────────────
  {
    vi: "Rất vui được gặp bạn. Bạn đã sống ở Thành phố Hồ Chí Minh lâu chưa?",
    en: "It is nice to meet you. How long have you been living in Ho Chi Minh City?",
    alts: ["Pleased to meet you. Have you been in Ho Chi Minh City for long?"],
    category: "Giao tiếp",
    context: "Gặp gỡ lần đầu / Small talk",
    tips: "• 'It's nice to meet you' = lần ĐẦU gặp; 'Nice to see you again' = gặp lại lần SAU\n• TẠI SAO 'How long have you been living?' (hiện tại hoàn thành tiếp diễn)? Người đó BẮT ĐẦU sống từ quá khứ và VẪN ĐANG sống ở đây — nhấn mạnh tính liên tục.\n• Small talk topics: weather, hometown, work, food, travel — tránh hỏi về tiền bạc/tuổi tác ngay lần đầu gặp."
  },
  {
    vi: "Xin lỗi, bạn có thể chỉ đường đến bảo tàng không? Tôi bị lạc.",
    en: "Excuse me, could you tell me how to get to the museum? I seem to have gotten lost.",
    alts: ["Pardon me, can you give me directions to the museum? I'm afraid I'm a bit lost."],
    category: "Giao tiếp",
    context: "Hỏi đường khi bị lạc",
    tips: "• 'Excuse me' = xin lỗi để bắt đầu nói chuyện với người lạ\n• 'how to get to + place' = cách đến... (KHÔNG phải 'how to go to')\n• 'seem to have V3' = hình như đã; 'I seem to have gotten lost' = hình như tôi bị lạc\n• 'I'm afraid' = tôi e rằng (cách thêm sự lịch sự/khiêm nhường — không phải 'sợ')."
  },
  {
    vi: "Xin hãy để lại tin nhắn sau tiếng bíp. Tôi sẽ gọi lại cho bạn sớm nhất có thể.",
    en: "Please leave a message after the beep. I will get back to you as soon as possible.",
    alts: ["Kindly leave your message after the tone and I'll return your call at the earliest opportunity."],
    category: "Giao tiếp",
    context: "Thư thoại tự động",
    tips: "• 'leave a message' = để lại tin nhắn (voicemail); 'after the beep/tone' = sau tiếng bíp\n• 'get back to you' = liên lạc lại, phản hồi lại (cụm rất phổ biến)\n• 'as soon as possible' (ASAP) = sớm nhất có thể; 'at the earliest opportunity' = trang trọng hơn\n• 'return your call' = gọi lại cho bạn (trang trọng); 'call you back' = gọi lại (thông thường)."
  },
  {
    vi: "Tôi đã cố gắng đặt bàn nhưng nhà hàng đó đã kín chỗ vào tối thứ Sáu.",
    en: "I tried to make a reservation but the restaurant was fully booked for Friday evening.",
    alts: ["I attempted to reserve a table, but there were no available spots at the restaurant on Friday night."],
    category: "Giao tiếp",
    context: "Lên kế hoạch ăn tối với bạn bè",
    tips: "• 'make a reservation' = đặt bàn (trang trọng); 'book a table' (Anh-Anh)\n• 'fully booked' = hết chỗ; 'no availability' = không còn chỗ trống\n• 'tried to + V' = đã cố gắng (ngụ ý không thành công ở đây)\n• 'for Friday evening' = cho tối thứ Sáu ('for' + thời gian khi đặt chỗ/lịch hẹn)."
  },
];

let transIndex = 0;
let transChecked = false;
let transGood = 0, transOk = 0, transBad = 0;

function wordsOf(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
}

function calcScore(userText, item) {
  const modelWords = wordsOf(item.en);
  const userWords = wordsOf(userText);
  const modelSet = new Set(modelWords);

  let hits = 0;
  userWords.forEach(w => { if (modelSet.has(w)) hits++; });

  const altScores = (item.alts || []).map(alt => {
    const altWords = wordsOf(alt);
    const altSet = new Set(altWords);
    let h = 0;
    userWords.forEach(w => { if (altSet.has(w)) h++; });
    return Math.round((h / altWords.length) * 100);
  });

  const baseScore = Math.round((hits / modelWords.length) * 100);
  return Math.max(baseScore, ...altScores);
}

function buildDiff(userText, modelText) {
  const userWords = userText.trim().split(/\s+/);
  const modelSet = new Set(wordsOf(modelText));
  return userWords.map(w => {
    const clean = w.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (modelSet.has(clean)) return `<span class="w-correct">${w}</span>`;
    return `<span class="w-wrong">${w}</span>`;
  }).join(' ');
}

function renderTranslation() {
  const item = TRANSLATION_DATA[transIndex];
  transChecked = false;

  document.getElementById('transCategoryBadge').textContent = item.category;
  document.getElementById('transCurrentNum').textContent = transIndex + 1;
  document.getElementById('transTotalNum').textContent = TRANSLATION_DATA.length;
  document.getElementById('transViText').textContent = item.vi;
  document.getElementById('transContext').textContent = '💬 ' + item.context;
  document.getElementById('transInput').value = '';
  document.getElementById('transInput').disabled = false;
  document.getElementById('transFeedbackCard').style.display = 'none';
  document.getElementById('transCheck').disabled = false;

  document.getElementById('transGoodCount').textContent = transGood;
  document.getElementById('transOkCount').textContent = transOk;
  document.getElementById('transBadCount').textContent = transBad;
}

function showTransFeedback(userInput, skipped) {
  const item = TRANSLATION_DATA[transIndex];
  const card = document.getElementById('transFeedbackCard');
  card.style.display = 'block';
  document.getElementById('transInput').disabled = true;
  document.getElementById('transCheck').disabled = true;

  let score = 0;
  let diffHtml = '';

  if (skipped) {
    score = 0;
    diffHtml = '<em style="color:var(--text-muted)">Bạn đã bỏ qua câu này.</em>';
    transBad++;
  } else {
    score = calcScore(userInput, item);
    diffHtml = buildDiff(userInput, item.en);
    if (score >= 80) transGood++;
    else if (score >= 50) transOk++;
    else transBad++;
  }

  state.transHistory.push({ vi: item.vi, en: item.en, userInput: skipped ? '' : userInput, score, date: new Date().toLocaleDateString('vi-VN') });
  saveState(state);

  const circle = document.getElementById('transScoreCircle');
  document.getElementById('transScoreNum').textContent = score;
  circle.className = 'trans-score-circle ' + (score >= 80 ? 'score-good' : score >= 50 ? 'score-ok' : 'score-bad');

  const labels = {
    good: '🎉 Rất tốt! Bản dịch của bạn rất chính xác.',
    ok: '👍 Khá tốt! Hãy đọc bản dịch gợi ý để cải thiện thêm.',
    bad: '📚 Chưa ổn, nhưng không sao! Đọc gợi ý và thử lại nhé.',
    skip: '➡️ Đây là bản dịch gợi ý để bạn tham khảo.',
  };
  document.getElementById('transScoreLabel').textContent =
    skipped ? labels.skip : score >= 80 ? labels.good : score >= 50 ? labels.ok : labels.bad;

  document.getElementById('transUserAnswer').innerHTML = skipped
    ? '<em style="color:var(--text-muted)">—</em>'
    : diffHtml;

  document.getElementById('transModelAnswer').textContent = item.en;

  const tipsEl = document.getElementById('transTips');
  tipsEl.innerHTML = '<strong>📝 Ghi chú ngữ pháp:</strong>' +
    item.tips.split('\n').map(line => `<div style="margin-top:4px">${line}</div>`).join('');

  document.getElementById('transGoodCount').textContent = transGood;
  document.getElementById('transOkCount').textContent = transOk;
  document.getElementById('transBadCount').textContent = transBad;
}

document.getElementById('transCheck').addEventListener('click', () => {
  if (transChecked) return;
  const input = document.getElementById('transInput').value.trim();
  if (!input) { document.getElementById('transInput').focus(); return; }
  transChecked = true;
  showTransFeedback(input, false);
});

document.getElementById('transSkip').addEventListener('click', () => {
  if (transChecked) return;
  transChecked = true;
  showTransFeedback('', true);
});

document.getElementById('transPrev').addEventListener('click', () => {
  transIndex = (transIndex - 1 + TRANSLATION_DATA.length) % TRANSLATION_DATA.length;
  renderTranslation();
});

document.getElementById('transNext').addEventListener('click', () => {
  transIndex = (transIndex + 1) % TRANSLATION_DATA.length;
  renderTranslation();
});

document.getElementById('transSpeakModel').addEventListener('click', () => {
  speak(TRANSLATION_DATA[transIndex].en);
});

// ── SPEECH ────────────────────────────────────────────────────────────

function speak(text, rate = 1.0) {
  if (!window.speechSynthesis) {
    alert('Trình duyệt của bạn không hỗ trợ tính năng đọc tiếng Anh. Hãy dùng Chrome hoặc Edge.');
    return;
  }
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = rate;
  utt.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google'))
    || voices.find(v => v.lang.startsWith('en'));
  if (enVoice) utt.voice = enVoice;

  window.speechSynthesis.speak(utt);
}

// Preload voices
window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();

// ── HISTORY ───────────────────────────────────────────────────────────

document.querySelectorAll('.hist-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.hist-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.hist-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('hist' + btn.dataset.hist.charAt(0).toUpperCase() + btn.dataset.hist.slice(1)).classList.add('active');
  });
});

function renderHistory() {
  // Vocab
  const learnedWords = VOCAB.filter(w => state.learned.has(w.id));
  const vocabEl = document.getElementById('histVocabList');
  if (learnedWords.length === 0) {
    vocabEl.innerHTML = '<p style="color:var(--muted);padding:24px;text-align:center">Bạn chưa đánh dấu từ nào là đã thuộc. Hãy học từ vựng và nhấn "✓ Đã thuộc"!</p>';
  } else {
    vocabEl.innerHTML = '<div class="hist-vocab-grid">' + learnedWords.map(w =>
      `<div class="hist-vocab-card">
        <div class="hvc-en">${w.en}</div>
        <div class="hvc-ipa">${w.ipa}</div>
        <div class="hvc-vi">${w.vi}</div>
      </div>`
    ).join('') + '</div>';
  }

  // Grammar errors
  const grammarEl = document.getElementById('histGrammarList');
  if (state.grammarErrors.length === 0) {
    grammarEl.innerHTML = '<p style="color:var(--muted);padding:24px;text-align:center">Chưa có lỗi nào — bạn đang làm rất tốt! 🎉</p>';
  } else {
    grammarEl.innerHTML = '<div class="hist-error-list">' + [...state.grammarErrors].reverse().map(e =>
      `<div class="hist-error-card">
        <div class="hec-label">${e.category}</div>
        <div class="hec-question">${e.q}</div>
        <div class="hec-row">
          <span class="hec-wrong">✗ ${e.userAns}</span>
          <span class="hec-correct">✓ ${e.correctAns}</span>
        </div>
        <div class="hec-explain">${e.explain}</div>
      </div>`
    ).join('') + '</div>';
  }

  // Listening errors
  const listenEl = document.getElementById('histListeningList');
  if (state.listenErrors.length === 0) {
    listenEl.innerHTML = '<p style="color:var(--muted);padding:24px;text-align:center">Chưa có lỗi nghe nào — tuyệt vời! 👂</p>';
  } else {
    listenEl.innerHTML = '<div class="hist-error-list">' + [...state.listenErrors].reverse().map(e =>
      `<div class="hist-error-card">
        <div class="hec-row"><span class="hec-wrong">✗ ${e.userInput || '(bỏ qua)'}</span></div>
        <div class="hec-row"><span class="hec-correct">✓ ${e.correct}</span></div>
      </div>`
    ).join('') + '</div>';
  }

  // Translation history
  const transEl = document.getElementById('histTransList');
  if (state.transHistory.length === 0) {
    transEl.innerHTML = '<p style="color:var(--muted);padding:24px;text-align:center">Chưa có lịch sử dịch nào. Hãy thử phần Tập dịch!</p>';
  } else {
    transEl.innerHTML = '<div class="hist-trans-list">' + [...state.transHistory].reverse().map(t =>
      `<div class="hist-trans-card">
        <div class="htc-score ${t.score >= 80 ? 'score-good' : t.score >= 50 ? 'score-ok' : 'score-bad'}">${t.score}%</div>
        <div class="htc-body">
          <div class="htc-vi">${t.vi}</div>
          ${t.userInput ? `<div class="htc-user">Bạn dịch: ${t.userInput}</div>` : ''}
          <div style="font-size:12px;color:var(--muted);margin-top:4px">${t.date}</div>
        </div>
      </div>`
    ).join('') + '</div>';
  }
}

// ── CHAT WIDGET ───────────────────────────────────────────────────────

const CHAT_KB = [
  {
    keys: ['hiện tại hoàn thành', 'present perfect', 'have been', 'has been', 'đã từng', 'dùng since', 'dùng for bao lâu', 'khi nào dùng have', 'just already yet', 'phân biệt present perfect', 'ever never'],
    answer: `📘 <b>Thì Hiện tại hoàn thành (Present Perfect)</b><br>
<b>Cấu trúc:</b> S + have/has + V3<br><br>
<b>Dùng khi nào?</b><br>
① Hành động <b>bắt đầu quá khứ, vẫn tiếp tục</b> → <em>for</em> (khoảng thời gian) / <em>since</em> (mốc thời gian)<br>
✅ <em>I have worked here <b>for</b> 5 years.</em><br>
② Hành động quá khứ có <b>kết quả ảnh hưởng đến hiện tại</b><br>
✅ <em>The meeting <b>has been</b> postponed.</em><br>
③ Dùng với <em>just, already, yet, ever, never, recently</em><br><br>
<b>⚠️ Phân biệt với Quá khứ đơn:</b><br>
"I <b>worked</b> there <em>in 2020</em>" → biết rõ thời điểm, đã kết thúc<br>
"I <b>have worked</b> there <em>since 2020</em>" → vẫn đang làm đến nay`
  },
  {
    keys: ['quá khứ đơn', 'past simple', 'simple past', 'thì quá khứ', 'khi nào dùng did', 'yesterday', 'last year', 'last week', 'ago', 'irregular verb', 'động từ bất quy tắc', 'v2 ed', 'thì quá khứ đơn'],
    answer: `📘 <b>Thì Quá khứ đơn (Past Simple)</b><br>
<b>Cấu trúc:</b> S + V2/ed ✅ | S + did not + V ❌ | Did + S + V? ❓<br><br>
<b>Dùng khi nào?</b><br>
• Hành động đã xảy ra và <b>kết thúc hoàn toàn</b> trong quá khứ<br>
• Kèm từ thời gian: <em>yesterday, last week, ago, in 2020, when I was young</em><br><br>
✅ <em>She <b>submitted</b> the report <b>yesterday</b>.</em><br>
✅ <em>They <b>signed</b> the contract <b>last Monday</b>.</em><br><br>
<b>⚠️ Phân biệt với Hiện tại hoàn thành:</b><br>
"I <b>met</b> him <em>last year</em>" → biết rõ thời điểm → quá khứ đơn ✓<br>
"I <b>have met</b> him <em>before</em>" → không rõ khi nào, ảnh hưởng hiện tại ✓`
  },
  {
    keys: ['tương lai', 'will vs going to', 'going to', 'thì tương lai', 'khi nào dùng will', 'khi nào dùng shall', 'future tense', 'will hay going to', 'dùng will', 'dùng going to'],
    answer: `📘 <b>Thì Tương lai: Will vs Going to</b><br><br>
<b>WILL + V</b> — quyết định ngay lúc nói / dự đoán không có bằng chứng<br>
✅ <em>"The phone is ringing." — "I'<b>ll</b> answer it!"</em> (vừa quyết định)<br>
✅ <em>I think it <b>will</b> rain tomorrow.</em> (dự đoán chủ quan)<br><br>
<b>BE GOING TO + V</b> — kế hoạch đã có sẵn / dự đoán có bằng chứng<br>
✅ <em>I'<b>m going to</b> attend the conference next week.</em> (đã lên kế hoạch)<br>
✅ <em>Look at those clouds — it'<b>s going to</b> rain!</em> (thấy bằng chứng)<br><br>
<b>Present Continuous</b> — lịch trình đã thu xếp cụ thể<br>
✅ <em>I'<b>m meeting</b> the client tomorrow at 3pm.</em>`
  },
  {
    keys: ['tiếp diễn', 'continuous', 'progressive', 'đang làm', 'present continuous', 'past continuous', 'was doing', 'were doing', 'thì tiếp diễn', 'am is are doing', 'thì hiện tại tiếp diễn'],
    answer: `📘 <b>Thì Tiếp diễn (Continuous)</b><br><br>
<b>Hiện tại tiếp diễn</b> — S + am/is/are + V-ing<br>
• Đang xảy ra lúc nói: <em>She <b>is typing</b> the report <b>now</b>.</em><br>
• Kế hoạch tương lai đã thu xếp: <em>We <b>are meeting</b> tomorrow.</em><br>
• Dùng với: <em>now, at the moment, currently, right now</em><br><br>
<b>Quá khứ tiếp diễn</b> — S + was/were + V-ing<br>
✅ <em>I <b>was working</b> when he called.</em><br>
✅ <em>They <b>were discussing</b> the deal at 9am.</em><br><br>
<b>⚠️ Không dùng tiếp diễn với:</b> know, believe, want, need, own, love, hate`
  },
  {
    keys: ['must', 'have to', 'should', 'ought to', 'phải làm', 'bắt buộc', 'nên làm', 'lời khuyên', 'modal verbs', 'động từ khiếm khuyết', 'mustn\'t', 'khi nào dùng must', 'phân biệt must should'],
    answer: `📘 <b>Must vs Have to vs Should</b><br><br>
<b>MUST</b> = nghĩa vụ <b>chủ quan</b> (người nói tự thấy cần)<br>
✅ <em>I <b>must</b> finish this report.</em><br><br>
<b>HAVE TO</b> = nghĩa vụ <b>khách quan</b> (quy định, luật lệ bên ngoài)<br>
✅ <em>All staff <b>have to</b> wear ID badges.</em><br><br>
<b>SHOULD</b> = lời khuyên, không bắt buộc<br>
✅ <em>You <b>should</b> review your notes before the exam.</em><br><br>
<b>⚠️ Chú ý quan trọng:</b><br>
<b>MUSTN'T</b> = tuyệt đối không được làm<br>
<b>DON'T HAVE TO</b> = không cần thiết phải làm (nghĩa hoàn toàn khác!)`
  },
  {
    keys: ['mạo từ', 'article', 'khi nào dùng a', 'dùng an', 'dùng the', 'khi nào the', 'a an the', 'không dùng mạo từ', 'a vs an', 'phân biệt a an the'],
    answer: `📘 <b>Mạo từ: A / An / The</b><br><br>
<b>A/AN</b> = lần đầu nhắc đến, không xác định<br>
✅ <em>I saw <b>a</b> dog.</em> | <em>She is <b>an</b> engineer.</em><br>
(<em>an</em> trước âm nguyên âm theo <b>phát âm</b>: <em>an hour, an MBA</em>)<br><br>
<b>THE</b> = đã xác định, người nghe biết, hoặc duy nhất trên đời<br>
✅ <em><b>The</b> dog I saw was black.</em> (con chó vừa nhắc)<br>
✅ <em><b>The</b> sun, the moon, the internet</em><br><br>
<b>Không dùng mạo từ</b> với: tên riêng, ngôn ngữ, môn học, bữa ăn<br>
✅ <em>I study <b>English</b>.</em> | <em>She lives in <b>Vietnam</b>.</em> | <em>We had <b>lunch</b>.</em>`
  },
  {
    keys: ['câu điều kiện', 'conditional', 'loại 1', 'loại 2', 'loại 3', 'would have', 'if i were', 'if clause', 'giả sử', 'điều kiện loại', 'if had'],
    answer: `📘 <b>Câu điều kiện — 4 loại</b><br><br>
<b>Loại 0</b> — Sự thật/quy luật: If + V hiện tại, V hiện tại<br>
✅ <em>If you heat water to 100°C, it <b>boils</b>.</em><br><br>
<b>Loại 1</b> — Khả năng thực tế: If + V hiện tại, will + V<br>
✅ <em>If it rains, I <b>will</b> stay home.</em><br><br>
<b>Loại 2</b> — Không thật ở hiện tại: If + V quá khứ, would + V<br>
✅ <em>If I <b>were</b> rich, I <b>would</b> travel the world.</em><br><br>
<b>Loại 3</b> — Không thật ở quá khứ: If + had V3, would have V3<br>
✅ <em>If she <b>had studied</b> harder, she <b>would have passed</b>.</em>`
  },
  {
    keys: ['bị động', 'passive voice', 'passive', 'câu bị động', 'was made', 'were built', 'chuyển sang bị động', 'be done', 'will be done', 'has been done', 'chuyển bị động'],
    answer: `📘 <b>Câu bị động (Passive Voice)</b><br>
<b>Cấu trúc:</b> S + be + V3 (+ by + người thực hiện)<br><br>
<table style="font-size:13px;border-collapse:collapse;width:100%">
<tr><td style="padding:2px 8px"><b>Hiện tại đơn</b></td><td style="padding:2px 8px">is/are + V3</td></tr>
<tr><td style="padding:2px 8px"><b>Quá khứ đơn</b></td><td style="padding:2px 8px">was/were + V3</td></tr>
<tr><td style="padding:2px 8px"><b>Hiện tại HT</b></td><td style="padding:2px 8px">has/have been + V3</td></tr>
<tr><td style="padding:2px 8px"><b>Tương lai</b></td><td style="padding:2px 8px">will be + V3</td></tr>
<tr><td style="padding:2px 8px"><b>Modal</b></td><td style="padding:2px 8px">must/should be + V3</td></tr>
</table><br>
✅ <em>The report <b>will be submitted</b> by Friday.</em><br>
✅ <em>The contract <b>has been signed</b>.</em>`
  },
  {
    keys: ['gerund', 'infinitive', 'v-ing hay to v', 'v-ing', 'động danh từ', 'sau recommend', 'sau enjoy', 'sau avoid', 'sau want', 'sau decide', 'sau stop', 'v-ing to v', 'enjoy avoid suggest'],
    answer: `📘 <b>Gerund (V-ing) vs Infinitive (to V)</b><br><br>
<b>Chỉ dùng V-ING sau:</b><br>
enjoy, avoid, consider, suggest, recommend, postpone, mind, finish, deny, risk<br>
✅ <em>I enjoy <b>reading</b>.</em> | <em>She avoided <b>answering</b>.</em><br><br>
<b>Chỉ dùng TO + V sau:</b><br>
want, decide, plan, hope, expect, manage, need, agree, refuse<br>
✅ <em>She decided <b>to leave</b> early.</em><br><br>
<b>Cả hai nhưng nghĩa khác:</b><br>
<em>stop <b>smoking</b></em> (dừng hút thuốc) ≠ <em>stop <b>to smoke</b></em> (dừng để hút)<br>
<em>remember <b>locking</b></em> (nhớ là đã khóa) ≠ <em>remember <b>to lock</b></em> (nhớ phải khóa)`
  },
  {
    keys: ['so sánh', 'comparative', 'superlative', 'so sánh hơn', 'so sánh nhất', 'more than', 'the most', 'er than', 'adj er', 'taller than', 'hơn nhất', 'so sánh tính từ'],
    answer: `📘 <b>So sánh trong tiếng Anh</b><br><br>
<b>So sánh hơn (Comparative):</b><br>
• Adj ngắn (1 âm tiết): <b>adj + -er + than</b><br>
✅ <em>taller, bigger, faster <b>than</b>...</em><br>
• Adj dài (2+ âm tiết): <b>more + adj + than</b><br>
✅ <em><b>more</b> interesting than, <b>more</b> efficient than...</em><br><br>
<b>So sánh nhất (Superlative):</b><br>
• Adj ngắn: <b>the + adj + -est</b> | Adj dài: <b>the most + adj</b><br>
✅ <em>the tallest | <b>the most</b> comprehensive report</em><br><br>
<b>Bất quy tắc:</b> good → better → <b>the best</b> | bad → worse → <b>the worst</b>`
  },
  {
    keys: ['giới từ', 'preposition', 'in on at', 'khi nào dùng in', 'khi nào dùng on', 'khi nào dùng at', 'giới từ thời gian', 'giới từ nơi chốn', 'at in on thời gian', 'phân biệt in on at'],
    answer: `📘 <b>Giới từ AT / ON / IN</b><br><br>
<b>⏰ Thời gian:</b><br>
• <b>AT</b>: giờ cụ thể → <em>at 3pm, at noon, at midnight, at Christmas</em><br>
• <b>ON</b>: ngày / thứ → <em>on Monday, on June 5th, on my birthday</em><br>
• <b>IN</b>: tháng, năm, buổi, mùa → <em>in June, in 2024, in the morning, in summer</em><br><br>
<b>📍 Nơi chốn:</b><br>
• <b>AT</b>: địa điểm cụ thể → <em>at the office, at school, at the airport</em><br>
• <b>ON</b>: bề mặt / phương tiện lớn → <em>on the table, on the bus, on page 5</em><br>
• <b>IN</b>: bên trong không gian → <em>in the room, in Vietnam, in the car</em>`
  },
  {
    keys: ['mệnh đề quan hệ', 'relative clause', 'khi nào dùng who', 'khi nào dùng which', 'khi nào dùng whose', 'who which that whose', 'defining relative', 'non-defining', 'phân biệt who which that'],
    answer: `📘 <b>Mệnh đề quan hệ (Relative Clauses)</b><br><br>
<b>WHO</b> — thay cho người<br>
✅ <em>The manager <b>who</b> called us is very strict.</em><br><br>
<b>WHICH</b> — thay cho vật / sự việc<br>
✅ <em>The report <b>which</b> you sent has an error.</em><br><br>
<b>THAT</b> — thay cho cả người lẫn vật (chỉ trong mệnh đề xác định)<br>
✅ <em>The file <b>that</b> I need is missing.</em><br><br>
<b>WHOSE</b> — sở hữu (của ai / của cái gì)<br>
✅ <em>The vendor <b>whose</b> contract was terminated...</em><br><br>
<b>Xác định</b> (không có dấu phẩy) = cần để hiểu nghĩa<br>
<b>Không xác định</b> (có dấu phẩy) = chỉ thêm thông tin phụ`
  },
  {
    keys: ['toeic', 'điểm toeic', 'thi toeic', 'ôn thi', 'mẹo toeic', 'luyện toeic', 'part 5', 'part 6', 'part 7', 'reading toeic', 'listening toeic', 'cách thi toeic'],
    answer: `📘 <b>Mẹo thi TOEIC đạt 770+</b><br><br>
<b>Part 5 & 6 (Ngữ pháp/Điền từ):</b><br>
• Nhận dạng: bị động? thì gì? gerund/infinitive? mạo từ?<br>
• Từ khóa: <em>since/for</em> → hiện tại hoàn thành; <em>by the time</em> → hoàn thành tương lai<br><br>
<b>Part 7 (Đọc hiểu):</b><br>
• Đọc câu hỏi TRƯỚC → tìm đoạn liên quan<br>
• Đáp án thường dùng từ đồng nghĩa, không copy nguyên văn<br><br>
<b>Từ vựng cốt lõi TOEIC:</b><br>
mitigate, stipulate, contingent, discrepancy, procurement, liability, viable, scrutinize`
  },
];

const ENCOURAGEMENTS = [
  "Bạn đang làm rất tốt! Mỗi từ học được là một bước tiến! 💪",
  "Kiên trì là chìa khóa thành công đó! Tiếp tục nha! 🔑",
  "TOEIC 770 không xa nữa rồi! Cố lên! 🎯",
  "Cu Shin ở đây cổ vũ bạn! Đừng bỏ cuộc! 🌟",
  "Học tiếng Anh hôm nay — tự tin giao tiếp ngày mai! ✈️",
  "Bạn đã học được bao nhiêu từ rồi? Tiếp tục thêm nhé! 📚",
];

let chatOpen = false;
let chatGreeted = false;

function toggleChat(open) {
  chatOpen = open;
  const panel = document.getElementById('chatPanel');
  const notif = document.getElementById('chatNotif');
  panel.classList.toggle('open', open);
  if (open) {
    notif.style.display = 'none';
    if (!chatGreeted) {
      chatGreeted = true;
      document.getElementById('chatQuickBtns').style.display = '';
      setTimeout(() => addShinMsg('Chào bạn! 👋 Mình là Cu Shin — trợ lý học tiếng Anh của bạn. Bạn có thể hỏi mình về ngữ pháp, từ vựng, hay bất kỳ thắc mắc nào về tiếng Anh nhé!'), 400);
    }
  }
}

document.getElementById('chatToggle').addEventListener('click', () => toggleChat(!chatOpen));
document.getElementById('chatClose').addEventListener('click', () => toggleChat(false));

function addShinMsg(html) {
  const msg = document.createElement('div');
  msg.className = 'chat-msg shin';
  msg.innerHTML = html;
  document.getElementById('chatMessages').appendChild(msg);
  document.getElementById('chatMessages').scrollTop = 9999;
}

function addUserMsg(text) {
  const msg = document.createElement('div');
  msg.className = 'chat-msg user';
  msg.textContent = text;
  document.getElementById('chatMessages').appendChild(msg);
  document.getElementById('chatMessages').scrollTop = 9999;
}

// ── GEMINI INTEGRATION ───────────────────────────────────────────────
function getGeminiKey() {
  const p = currentUser ? `em_${currentUser.username}_` : 'em_';
  return localStorage.getItem(p + 'gemini_key') || '';
}
function setGeminiKey(key) {
  const p = currentUser ? `em_${currentUser.username}_` : 'em_';
  if (key) localStorage.setItem(p + 'gemini_key', key);
  else localStorage.removeItem(p + 'gemini_key');
}
function updateGeminiStatus() {
  const el = document.getElementById('chatStatus');
  if (!el) return;
  el.textContent = getGeminiKey() ? '✨ Gemini đã kết nối' : 'Hỏi gì cũng biết!';
}
function markdownToHtml(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code style="background:#f0f0f0;padding:1px 4px;border-radius:3px">$1</code>')
    .replace(/\n/g, '<br>');
}
const GEMINI_MODELS = [
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
  'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent',
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
  'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent',
];

async function callGeminiUrl(url, key, text) {
  let res;
  try {
    res = await fetch(`${url}?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: `Bạn là Cu Shin, trợ lý học tiếng Anh cho người Việt học TOEIC. Luôn trả lời bằng tiếng Việt, ngắn gọn (tối đa 250 từ), có ví dụ tiếng Anh cụ thể. Dùng ✅ ❌ 💡 📘 để nhấn mạnh. Dùng ** để in đậm từ quan trọng.\n\nCâu hỏi: ${text}` }] }],
        generationConfig: { maxOutputTokens: 700, temperature: 0.7 }
      })
    });
  } catch (e) {
    throw new Error('network');
  }
  if (res.status === 404 || res.status === 429) return null; // not found / quota exceeded → try next
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    const errMsg = errData?.error?.message || `HTTP ${res.status}`;
    // 400 "model not found / not supported" or quota → try next; bad key → throw
    if (res.status === 400 && (errMsg.toLowerCase().includes('not found') || errMsg.toLowerCase().includes('not supported') || errMsg.toLowerCase().includes('deprecated') || errMsg.toLowerCase().includes('quota'))) {
      return null;
    }
    throw new Error(errMsg);
  }
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function callGemini(question) {
  const key = getGeminiKey();
  if (!key) return null;
  for (const url of GEMINI_MODELS) {
    try {
      const raw = await callGeminiUrl(url, key, question);
      if (raw === null) continue; // model not found, try next
      if (!raw) throw new Error('Gemini không trả về nội dung. Thử lại sau.');
      return markdownToHtml(raw);
    } catch (e) {
      if (e.message === 'network') throw new Error('Không thể kết nối internet. Kiểm tra mạng.');
      if (url === GEMINI_MODELS[GEMINI_MODELS.length - 1]) throw e; // last model → rethrow
    }
  }
  throw new Error('Không có model Gemini nào khả dụng trong vùng của bạn.');
}
function addLoadingMsg() {
  const msg = document.createElement('div');
  msg.className = 'chat-msg shin';
  msg.innerHTML = '<span class="chat-dot-loading"><span></span><span></span><span></span></span> Gemini đang suy nghĩ...';
  document.getElementById('chatMessages').appendChild(msg);
  document.getElementById('chatMessages').scrollTop = 9999;
  return msg;
}

async function chatRespond(question) {
  const q = question.toLowerCase().trim();
  const words = q.split(/[\s,?!.;:()"']+/).filter(w => w.length > 0);

  const match = CHAT_KB.find(kb => kb.keys.some(key => {
    const k = key.toLowerCase();
    if (k.includes(' ')) return q.includes(k);
    if (k.length <= 5) return words.includes(k);
    return q.includes(k);
  }));

  if (match) {
    setTimeout(() => addShinMsg(match.answer), 400);
    return;
  }

  if (getGeminiKey()) {
    const loadingEl = addLoadingMsg();
    try {
      const answer = await callGemini(question);
      loadingEl.innerHTML = answer || 'Gemini không có câu trả lời cho câu hỏi này.';
    } catch (e) {
      loadingEl.innerHTML = `❌ <b>Gemini lỗi:</b> ${e.message}<br><small style="color:#888">Nếu lỗi "API key not valid" → nhấn 🔑 nhập lại key.<br>Nếu lỗi "internet/proxy" → thử mở app qua localhost.</small>`;
    }
    document.getElementById('chatMessages').scrollTop = 9999;
  } else {
    setTimeout(() => addShinMsg(`💬 Cu Shin chưa biết câu này!<br><br>💡 Nhấn <b>🔑</b> để kết nối <b>Gemini AI</b> — Cu Shin sẽ trả lời được mọi câu hỏi tiếng Anh thông minh như Google!<br><br>Hoặc hỏi về: <b>thì động từ, câu điều kiện, bị động, mạo từ, TOEIC tips...</b>`), 400);
  }
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  addUserMsg(text);
  input.value = '';
  document.getElementById('chatQuickBtns').style.display = 'none';
  chatRespond(text);
}

document.getElementById('chatSend').addEventListener('click', sendChat);
document.getElementById('chatInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') sendChat();
});

// Gemini key panel
document.getElementById('chatKeyBtn').addEventListener('click', () => {
  const panel = document.getElementById('chatKeyPanel');
  const isOpen = panel.classList.toggle('show');
  document.getElementById('chatKeyBtn').classList.toggle('active', isOpen);
  if (isOpen) {
    const existing = getGeminiKey();
    document.getElementById('geminiKeyInput').value = existing ? '●'.repeat(16) : '';
    document.getElementById('geminiKeyInput').dataset.saved = existing ? '1' : '';
    setTimeout(() => document.getElementById('geminiKeyInput').focus(), 50);
  }
});
document.getElementById('geminiKeyInput').addEventListener('focus', function() {
  if (this.dataset.saved === '1') { this.value = ''; this.dataset.saved = ''; }
});
document.getElementById('saveGeminiKey').addEventListener('click', async () => {
  const val = document.getElementById('geminiKeyInput').value.trim();
  const hintEl = document.getElementById('chatKeyPanel').querySelector('.chat-key-hint');
  if (!val || val.includes('●')) {
    hintEl.innerHTML = '⚠️ Vui lòng nhập API key của bạn.';
    return;
  }
  if (!val.startsWith('AIza') || val.length < 35) {
    hintEl.innerHTML = '⚠️ Key không đúng định dạng. Key phải bắt đầu bằng <b>AIza</b> và dài ~39 ký tự.';
    return;
  }
  hintEl.innerHTML = '🔄 Đang kiểm tra key...';
  // Test the key using multi-model fallback (same as callGemini)
  try {
    let tested = false;
    for (const url of GEMINI_MODELS) {
      try {
        const result = await callGeminiUrl(url, val, 'Hi');
        if (result === null) continue; // model not found / quota → try next
        tested = true;
        break;
      } catch (e) {
        const m = e.message || '';
        // Key invalid or network error → stop immediately
        if (e.message === 'network' || m.toLowerCase().includes('api key') || m.toLowerCase().includes('invalid') || m.toLowerCase().includes('permission')) throw e;
        // Other errors → try next model
      }
    }
    if (!tested) {
      hintEl.innerHTML = '❌ Không có model Gemini nào khả dụng trong vùng của bạn.';
      return;
    }
    // Key valid
    setGeminiKey(val);
    updateGeminiStatus();
    document.getElementById('chatKeyPanel').classList.remove('show');
    document.getElementById('chatKeyBtn').classList.remove('active');
    hintEl.innerHTML = 'Lấy key miễn phí tại <b>aistudio.google.com</b> · Lưu trong máy bạn';
    addShinMsg('✅ Đã kết nối Gemini AI thành công! Giờ Cu Shin có thể trả lời mọi câu hỏi tiếng Anh. 🎉');
  } catch (e) {
    const msg = e.message === 'network' ? 'Không kết nối được Google. Kiểm tra mạng.' : (e.message || 'Lỗi không xác định.');
    hintEl.innerHTML = `❌ Key lỗi: <b>${msg}</b><br>Lấy key tại <b>aistudio.google.com</b> → Get API key.`;
  }
});
document.getElementById('clearGeminiKey').addEventListener('click', () => {
  setGeminiKey('');
  document.getElementById('geminiKeyInput').value = '';
  document.getElementById('geminiKeyInput').dataset.saved = '';
  updateGeminiStatus();
  addShinMsg('🔑 Đã xóa Gemini API key. Cu Shin trở về chế độ offline.');
});


document.querySelectorAll('.quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const q = btn.dataset.q;
    addUserMsg(q);
    document.getElementById('chatQuickBtns').style.display = 'none';
    chatRespond(q);
  });
});

// Periodic encouragement notification
setTimeout(() => {
  const notif = document.getElementById('chatNotif');
  if (!chatOpen) notif.style.display = 'flex';
}, 3 * 60 * 1000);

setInterval(() => {
  if (!chatOpen) {
    const notif = document.getElementById('chatNotif');
    notif.style.display = 'flex';
  } else {
    const msg = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
    addShinMsg('💬 ' + msg);
  }
}, 8 * 60 * 1000);

// ── ADMIN PANEL ──────────────────────────────────────────────────────
async function updateAdminBadge() {
  if (!currentUser || currentUser.role !== 'admin') return;
  try {
    const pending = await apiFetch('/api/admin/pending');
    const badge = document.getElementById('adminBadge');
    const count = pending.length;
    if (count > 0) { badge.textContent = count; badge.classList.add('show'); }
    else { badge.textContent = ''; badge.classList.remove('show'); }
  } catch {}
}

async function renderAdminPanel() {
  if (!currentUser || currentUser.role !== 'admin') return;
  const pendingEl = document.getElementById('pendingList');
  const memberEl = document.getElementById('memberList');
  pendingEl.innerHTML = '<div class="admin-empty">⏳ Đang tải...</div>';

  try {
    const [pending, users] = await Promise.all([
      apiFetch('/api/admin/pending'),
      apiFetch('/api/admin/users'),
    ]);

    const badge = document.getElementById('adminBadge');
    if (pending.length > 0) { badge.textContent = pending.length; badge.classList.add('show'); }
    else { badge.textContent = ''; badge.classList.remove('show'); }

    if (pending.length === 0) {
      pendingEl.innerHTML = '<div class="admin-empty">Không có yêu cầu nào đang chờ duyệt.</div>';
    } else {
      pendingEl.innerHTML = pending.map(req => `
        <div class="admin-request-card" id="arc-${req.username}">
          <div class="arc-info">
            <div class="arc-username">👤 ${req.username}</div>
            <div class="arc-date">Yêu cầu lúc: ${req.requested_at ? new Date(req.requested_at).toLocaleString('vi-VN') : '—'}</div>
          </div>
          <div class="arc-actions">
            ${req.has_code
              ? `<div class="arc-code-display">Mã kích hoạt: <b>${req.code}</b></div>
                 <button class="btn btn-danger" style="font-size:13px;padding:6px 12px" onclick="rejectRequest('${req.username}')">Xóa</button>`
              : `<button class="btn btn-success" style="font-size:13px;padding:6px 12px" onclick="approveRequest('${req.username}')">✓ Duyệt & tạo mã</button>
                 <button class="btn btn-danger" style="font-size:13px;padding:6px 12px" onclick="rejectRequest('${req.username}')">✗ Từ chối</button>`
            }
          </div>
        </div>`).join('');
    }

    const nonAdmins = users.filter(u => u.role !== 'admin');
    if (nonAdmins.length === 0) {
      memberEl.innerHTML = '<div class="admin-empty">Chưa có thành viên nào ngoài admin.</div>';
    } else {
      memberEl.innerHTML = nonAdmins.map(u => `
        <div class="admin-member-card">
          <span class="amc-icon">👤</span>
          <span class="amc-name">${u.username}</span>
          <span class="amc-role">Thành viên</span>
        </div>`).join('');
    }
  } catch (e) {
    pendingEl.innerHTML = `<div class="admin-empty">❌ ${e.message}</div>`;
  }
}

async function approveRequest(username) {
  try {
    const { code } = await apiFetch(`/api/admin/approve/${username}`, { method: 'POST' });
    document.getElementById('adminMsg').textContent = `✅ Đã tạo mã ${code} cho ${username}. Báo mã này cho người dùng!`;
    renderAdminPanel();
  } catch (e) {
    document.getElementById('adminMsg').textContent = `❌ ${e.message}`;
  }
}

async function rejectRequest(username) {
  try {
    await apiFetch(`/api/admin/reject/${username}`, { method: 'POST' });
    document.getElementById('adminMsg').textContent = `🗑️ Đã xóa yêu cầu của ${username}.`;
    renderAdminPanel();
  } catch (e) {
    document.getElementById('adminMsg').textContent = `❌ ${e.message}`;
  }
}

// ── APP INITIALIZATION ────────────────────────────────────────────────
function initApp() {
  state = loadState();
  updateStreak();

  currentVocab = [...VOCAB]; vocabIndex = 0; isFlipped = false;
  grammarIndex = 0; grammarScore = 0; answered = false;
  questions = [...GRAMMAR_QUESTIONS].sort(() => Math.random() - 0.5);
  listeningIndex = 0; listeningChecked = false;
  sentences = [...LISTENING_SENTENCES].sort(() => Math.random() - 0.5);
  transIndex = 0; transChecked = false; transGood = 0; transOk = 0; transBad = 0;
  chatOpen = false; chatGreeted = false;
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatPanel').classList.remove('open');
  document.getElementById('chatQuickBtns').style.display = '';

  updateDashboard();
  renderCard();
  document.getElementById('grammarResult').style.display = 'none';
  document.getElementById('grammarQuiz').style.display = 'block';
  renderQuestion();
  renderListening();
  renderTranslation();

  document.getElementById('dashGreeting').textContent = `Xin chào, ${currentUser.username}! 👋`;
  document.getElementById('userNameSm').textContent = '👤 ' + currentUser.username;
  updateGeminiStatus();

  if (currentUser.role === 'admin') {
    document.getElementById('adminNavBtn').style.display = 'flex';
    updateAdminBadge();
  } else {
    document.getElementById('adminNavBtn').style.display = 'none';
  }
}

// ── LOGIN SYSTEM ──────────────────────────────────────────────────────
function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('tabLogin').classList.add('active');
  document.getElementById('tabRegister').classList.remove('active');
  document.getElementById('loginMsg').textContent = '';
}

function showRegisterForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
  document.getElementById('tabLogin').classList.remove('active');
  document.getElementById('tabRegister').classList.add('active');
  document.getElementById('regMsg1').textContent = '';
  document.getElementById('regMsg2').textContent = '';
  document.getElementById('regStep1').style.display = 'block';
  document.getElementById('regStep2').style.display = 'none';
}

document.getElementById('tabLogin').addEventListener('click', showLoginForm);
document.getElementById('tabRegister').addEventListener('click', showRegisterForm);

async function doLogin() {
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;
  const msgEl = document.getElementById('loginMsg');
  if (!username || !password) { msgEl.textContent = 'Vui lòng nhập đầy đủ thông tin.'; return; }
  msgEl.textContent = '⏳ Đang đăng nhập...';
  try {
    const { token, user } = await apiFetch('/api/auth/login', { method: 'POST', body: { username, password } });
    localStorage.setItem('em_token', token);
    currentUser = user;
    await syncProgressFromAPI();
    document.getElementById('loginOverlay').style.display = 'none';
    initApp();
  } catch (e) {
    msgEl.textContent = '❌ ' + e.message;
  }
}

document.getElementById('doLogin').addEventListener('click', doLogin);
document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
document.getElementById('loginUser').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

async function doRegRequest() {
  const username = document.getElementById('regUser').value.trim();
  const password = document.getElementById('regPass').value;
  const confirm = document.getElementById('regPassConfirm').value;
  const msgEl = document.getElementById('regMsg1');

  if (!username || !password) { msgEl.textContent = 'Vui lòng điền đầy đủ.'; return; }
  if (password !== confirm) { msgEl.textContent = '❌ Mật khẩu xác nhận không khớp.'; return; }
  msgEl.textContent = '⏳ Đang gửi yêu cầu...';
  try {
    await apiFetch('/api/auth/register', { method: 'POST', body: { username, password } });
    document.getElementById('regActivateUser').value = username;
    document.getElementById('regStep1').style.display = 'none';
    document.getElementById('regStep2').style.display = 'block';
    document.getElementById('regMsg2').textContent = '';
  } catch (e) {
    msgEl.textContent = '❌ ' + e.message;
  }
}

document.getElementById('doRegRequest').addEventListener('click', doRegRequest);

async function doActivate() {
  const username = document.getElementById('regActivateUser').value.trim();
  const code = document.getElementById('regCode').value.trim();
  const msgEl = document.getElementById('regMsg2');

  if (!code) { msgEl.textContent = 'Vui lòng nhập mã 4 số từ admin.'; return; }
  msgEl.textContent = '⏳ Đang kích hoạt...';
  try {
    const { token, user } = await apiFetch('/api/auth/activate', { method: 'POST', body: { username, code } });
    msgEl.textContent = '✅ Tài khoản đã được kích hoạt! Đang đăng nhập...';
    localStorage.setItem('em_token', token);
    currentUser = user;
    setTimeout(() => {
      document.getElementById('loginOverlay').style.display = 'none';
      initApp();
    }, 1000);
  } catch (e) {
    msgEl.textContent = '❌ ' + e.message;
  }
}

document.getElementById('doActivate').addEventListener('click', doActivate);
document.getElementById('regCode').addEventListener('keydown', e => { if (e.key === 'Enter') doActivate(); });

document.getElementById('logoutBtn').addEventListener('click', () => {
  currentUser = null;
  localStorage.removeItem('em_token');
  chatOpen = false; chatGreeted = false;
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatPanel').classList.remove('open');
  document.getElementById('chatQuickBtns').style.display = '';
  document.getElementById('loginOverlay').style.display = 'flex';
  showLoginForm();
});

// ── STARTUP ──────────────────────────────────────────────────────────
async function tryAutoLogin() {
  const token = localStorage.getItem('em_token');
  if (!token) return false;
  try {
    const user = await apiFetch('/api/auth/me');
    currentUser = user;
    await syncProgressFromAPI();
    document.getElementById('loginOverlay').style.display = 'none';
    initApp();
    return true;
  } catch {
    localStorage.removeItem('em_token');
    return false;
  }
}

if (!tryAutoLogin()) {
  document.getElementById('loginOverlay').style.display = 'flex';
}
