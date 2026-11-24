const translations = {
  en: {
    nav_about:"About us", nav_services:"Services", nav_faq:"Questions", nav_contact:"Contact", nav_book:"Book now",
    hero_eyebrow:"EXPERIENCE THE RHYTHM OF DA NANG YOUR WAY", hero_title:"Your Journey.<br><em>Your Freedom.</em>", hero_text:"From the breezy shores of My Khe Beach and the lush Son Tra Peninsula to bridges glowing with lights at night, Da Nang is full of hidden corners waiting for you to explore on your own. Ride with BeFree's modern, smooth and clean electric scooter fleet, ready to take you around the city safely and comfortably, 24/7.", hero_cta:"Rent a scooter", hero_call:"Call us now",
    stat_support:"Support", stat_day:"VND / day", stat_safe:"Clean & safe", rating:"Customer rating",
    intro_note:"Always ready", about_kicker:"WELCOME TO BEFREE!", about_title:"Freely explore a city worth living in", about_text:"Befree E-Scooter Rental offers convenient, eco-friendly transportation for visitors to Da Nang. We believe every journey deserves to be easy and memorable. With a simple, quick electric scooter rental service and many complimentary amenities, Befree helps you freely explore every street, beach and beautiful destination in the city.", about_li1:"Rent without a driving license, with simple paperwork and quick confirmation", about_li2:"Helmets and essential accessories included", about_li3:"Friendly local support throughout your trip",
    services_kicker:"Our services", services_title:"Everything you need for a great ride", service1_title:"Vehicles", service1_text:"The lightweight VinFast Evo Lite is easy to ride, requires no driving license, and runs smoothly and safely—so you can comfortably explore the city all day.", service2_title:"Flexible rental periods", service2_text:"Plan by the day, week or month; easily change your pickup or return time, or extend your rental whenever needed.", service3_title:"Delivery & 24/7 support", service3_text:"We deliver right to your door on time, and our team is always ready to offer thoughtful advice and support, 24/7, whenever you need it.",
    why_kicker:"Why choose us", why_title:"Peace of mind on every mile", why1_title:"No deposit required", why1_text:"Simple procedure with no deposit hold. Just present your citizen ID or passport, sign the rental agreement, and collect the scooter immediately.", why2_title:"Free battery swaps", why2_text:"No need to wait for a long charge. You can swap batteries quickly at our store or at VinFast battery-swapping stations.", why3_title:"New, clean & safe scooters", why3_text:"100% new VinFast electric scooters, thoroughly cleaned and mechanically checked before every trip for smooth and safe operation.", why4_title:"Transparent pricing", why4_text:"Clear daily, weekly, and monthly rental prices. We guarantee no hidden fees, making it easy to plan your travel budget.",
    booking_kicker:"Book now", booking_title:"Ready to ride in minutes", booking_text:"Complete the form and the BeFree team will confirm your booking right away.", booking_support:"Always available", booking_price:"VND per day", price_table_title:"Rental price", price_table_days:"Rental period", price_table_rate:"VND / day", price_1_2_days:"1-2 days", price_3_4_days:"3-4 days", price_5_29_days:"5-29 days", price_30_days:"30+ days", form_name:"Full name", form_phone:"Phone number", form_date:"Rental date", form_days:"Number of days", form_chat_platform:"Choose a platform to contact you with the phone number {phone}", form_estimate:"Estimated total", form_estimate_from:"From 70,000 VND / day", form_submit:"Send booking request", form_wait:"Please wait {seconds}s", form_name_placeholder:"Your name", form_phone_placeholder:"09xx xxx xxx", form_days_placeholder:"Enter number", form_success:"Your booking request was sent successfully.", form_error:"Could not send the request. Please try WhatsApp.",
    reviews_kicker:"Customer stories", reviews_title:"What our guests say", review1:"“I rented a BeFree scooter in Da Nang and was very pleased with its cleanliness and the staff's courteous manner. The scooter was high quality, and the experience was great.”", review2:"“The rental process was very quick and easy. The scooter rode smoothly and handled well. The team was attentive, and the special offers were appealing.”", review3:"“I've rented from BeFree many times and have always been satisfied. The scooters are well maintained, the prices are good, and support is always available.”",
    faq_kicker:"FAQ", faq_title:"Frequently asked questions", faq1_q:"Where is the BeFree store?", faq1_a:"BeFree Rental is located at 46 Nguyễn Đức Cảnh, Hải Châu, Da Nang. Visit the store to pick up your scooter and ask about our services, or call 0988616168.", faq2_q:"Does BeFree offer delivery?", faq2_a:"BeFree delivers scooters to the airport, train station, hotels and other requested locations in Da Nang. Provide your preferred pickup location and time when booking.", faq3_q:"What is the battery-swap policy?", faq3_a:"BeFree provides one free battery swap per day at battery-swap stations, with unlimited swaps at the store during your rental. This policy is subject to BeFree's rental terms.", faq4_q:"What documents do I need to rent a scooter?", faq4_a:"Vietnamese customers need a citizen ID card (CCCD); international customers need a passport. These documents are used to verify your information and complete the rental process.", faq5_q:"Do I need to pay a deposit?", faq5_a:"BeFree Rental does not require a deposit. Provide your personal information, complete and sign the rental agreement, then pay after signing. The process is simple, quick and convenient.", faq6_q:"How can I contact BeFree Rental if I need assistance?", faq6_a:"Contact BeFree by hotline at 0988 616 168, WhatsApp, Zalo, WeChat or KakaoTalk. Our team is always ready to help and answer your questions during your rental.",
    contract_title:"Contract terms", party_a_title:"Rights and obligations of the Lessor (Party A)", party_a_rights_title:"Rights of Party A", party_a_right_1:"Receive full payment of the rental fee upon motorbike handover.", party_a_right_2:"Receive the motorbike back on time and in the same condition as delivered.", party_a_right_3:"Require Party B to compensate for damages, lost parts, misuse, or unauthorized subleasing of the motorbike.", party_a_right_4:"Require Party B to pay all traffic violation fines, including on-the-spot and camera-detected fines, incurred during the rental period.", party_a_obligations_title:"Obligations of Party A", party_a_obligation_1:"Deliver the motorbike of the agreed model, on time, at the designated location, in clean condition, and with all necessary accessories.", party_a_obligation_2:"Bear full legal responsibility for the origin and lawful ownership of the rental motorbike.", party_b_title:"Rights and obligations of the Lessee (Party B)", party_b_rights_title:"Rights of Party B", party_b_right_1:"Receive technical support and assistance from Party A throughout the rental period.", party_b_right_2:"Receive the motorbike of the agreed model, on time, at the designated location, and fully equipped with accessories.", party_b_right_3:"Enjoy unlimited mileage during the rental period.", party_b_right_4:"Get one free battery swap per day at battery-swapping stations and unlimited free battery swaps at Party A's store during the rental period.", party_b_obligations_title:"Obligations of Party B", party_b_obligation_1:"Present valid identification documents (ID/passport) and pay the full rental fee upon receiving the motorbike.", party_b_obligation_2:"Inspect the motorbike carefully upon handover and preserve the motorbike and its accessories during the rental period.", party_b_obligation_3:"Return the motorbike on time. In case of late return, Party B shall pay additional charges as stipulated in Article 3.", party_b_obligation_4:"Strictly comply with road traffic law and be fully responsible for all traffic violation fines, including on-the-spot and camera-detected fines, incurred during the rental period, even after contract termination.", party_b_obligation_5:"Not use the motorbike for illegal purposes, racing, pawning, subleasing, or allow any unqualified or unlicensed person to operate it.", party_b_obligation_6:"Compensate 100% of repair or replacement costs at official or market prices for any damage or loss of parts.", common_terms_title:"General terms of both parties", common_term_1:"This Contract and the Handover Minutes form an integral agreement. Both Parties commit to strictly executing all terms herein. Neither Party may unilaterally amend, suspend, or terminate this Contract without mutual consent.", common_term_2:"Any disputes arising during execution of this Contract shall first be resolved through amicable negotiation. If no agreement is reached, the dispute shall be referred to a competent authority or court for resolution, and the losing party shall bear all related costs.", common_term_3:"This Contract shall terminate once Party B returns the motorbike in acceptable condition to Party A and settles all outstanding fees.", common_term_4:"This Contract takes effect upon signing by both Parties and is made into two copies of equal legal validity, with each Party keeping one copy.",
    footer_text:"Safe, affordable and convenient electric scooter rental in Da Nang.", footer_links:"Explore", footer_contact:"Contact", footer_rights:"Copyright registered."
  },
  vi: {
    nav_about:"Về chúng tôi", nav_services:"Dịch vụ", nav_faq:"Câu hỏi", nav_contact:"Liên hệ", nav_book:"Đặt xe ngay",
    hero_eyebrow:"CHẠM VÀO NHỊP SỐNG ĐÀ NẴNG THEO CÁCH CỦA BẠN", hero_title:"Hành trình của bạn.<br><em>Tự do của bạn.</em>", hero_text:"Từ những cung đường biển Mỹ Khê lộng gió, bán đảo Sơn Trà xanh mát đến những cây cầu rực rỡ ánh đèn về đêm — Đà Nẵng luôn có những góc nhỏ chờ bạn tự mình trải nghiệm.\nĐồng hành cùng dàn xe máy điện hiện đại, êm ái và sạch sẽ từ BeFree, sẵn sàng đưa bạn đi khắp thành phố an toàn và thoải mái 24/7.", hero_cta:"Thuê xe ngay", hero_call:"Gọi cho chúng tôi",
    stat_support:"Hỗ trợ", stat_day:"VNĐ / ngày", stat_safe:"Sạch & an toàn", rating:"Đánh giá",
    intro_note:"Luôn sẵn sàng", about_kicker:"CHÀO MỪNG ĐẾN VỚI BEFREE!", about_title:"Tự do khám phá thành phố đáng sống", about_text:"Befree E-Scooter Rental mang đến giải pháp di chuyển tiện lợi và thân thiện với môi trường dành cho du khách khi đến với Đà Nẵng.\nChúng tôi tin rằng mỗi hành trình đều xứng đáng trở nên dễ dàng và đáng nhớ. Với dịch vụ thuê xe máy điện đơn giản, nhanh chóng cùng nhiều tiện ích miễn phí, Befree giúp bạn tự do khám phá từng góc phố, bãi biển và những địa điểm tuyệt đẹp của thành phố.", about_li1:"Thuê xe không cần bằng lái, thủ tục gọn lẹ, xác nhận nhanh", about_li2:"Bao gồm mũ bảo hiểm và phụ kiện cần thiết", about_li3:"Đồng hành và hỗ trợ nhiệt tình suốt chuyến đi",
    services_kicker:"Dịch vụ", services_title:"Mọi thứ bạn cần cho một chuyến đi tuyệt vời", service1_title:"Phương tiện", service1_text:"VinFast Evo Lite gọn nhẹ, dễ lái, không cần bằng lái và vận hành êm ái, an toàn để bạn vi vu phố thị thoải mái suốt cả ngày", service2_title:"Thời gian thuê linh hoạt", service2_text:"Chủ động lịch trình theo ngày, tuần hoặc tháng; dễ dàng đổi giờ nhận/trả hoặc gia hạn khi cần.", service3_title:"Giao xe & đồng hành 24/7", service3_text:"Giao xe tận nơi, đúng hẹn; đội ngũ luôn sẵn sàng tư vấn và hỗ trợ tận tâm 24/7 mỗi khi bạn cần.",
    why_kicker:"Vì sao chọn chúng tôi", why_title:"An tâm trên từng cây số", why1_title:"Không cần đặt cọc", why1_text:"Thủ tục tinh gọn, không giữ tiền cọc rườm rà. Chỉ cần CCCD hoặc Hộ chiếu là bạn có thể ký hợp đồng và nhận xe ngay.", why2_title:"Đổi pin miễn phí", why2_text:"Không cần chờ đợi sạc lâu, dễ dàng thay pin chỉ trong vài phút tại cửa hàng hoặc các trạm đổi pin VinFast.", why3_title:"Xe đời mới, sạch sẽ & an toàn", why3_text:"100% xe máy điện VinFast đời mới, luôn được vệ sinh sạch sẽ và kiểm tra kỹ thuật trước mỗi chuyến đi; đảm bảo vận hành êm ái và an toàn tối đa.", why4_title:"Giá cả minh bạch", why4_text:"Bảng giá thuê niêm yết rõ ràng theo từng gói ngày, tuần, tháng; cam kết không phát sinh chi phí ẩn, giúp bạn dễ dàng dự trù ngân sách cho mọi chuyến đi.",
    booking_kicker:"Đặt xe ngay", booking_title:"Sẵn sàng khởi hành trong vài phút", booking_text:"Điền biểu mẫu và đội ngũ BeFree sẽ xác nhận ngay.", booking_support:"Luôn sẵn sàng", booking_price:"VNĐ mỗi ngày", price_table_title:"Bảng giá thuê xe", price_table_days:"Thời gian thuê", price_table_rate:"VNĐ / ngày", price_1_2_days:"1-2 ngày", price_3_4_days:"3-4 ngày", price_5_29_days:"5-29 ngày", price_30_days:"Từ 30 ngày", form_name:"Họ và tên", form_phone:"Số điện thoại", form_date:"Ngày thuê", form_days:"Số ngày", form_chat_platform:"Chọn nền tảng để chúng tôi liên hệ qua số điện thoại {phone}", form_estimate:"Tổng dự kiến", form_estimate_from:"Chỉ từ 70.000 VNĐ / ngày", form_submit:"Gửi yêu cầu đặt xe", form_wait:"Vui lòng chờ {seconds}s", form_name_placeholder:"Tên của bạn", form_phone_placeholder:"09xx xxx xxx", form_days_placeholder:"Nhập số lượng", form_success:"Yêu cầu đặt xe đã được gửi thành công.", form_error:"Không thể gửi yêu cầu. Vui lòng thử WhatsApp.",
    reviews_kicker:"Chia sẻ khách hàng", reviews_title:"Khách hàng nói gì về chúng tôi", review1:"“Xe sạch sẽ và nhân viên rất thân thiện. Cách tuyệt vời để khám phá Đà Nẵng.”", review2:"“Thủ tục nhanh và giá cả hợp lý. Nhóm hỗ trợ rất giúp ích khi tôi cần chỉ đường.”", review3:"“Xe ổn định và hỗ trợ 24/7 tuyệt vời. Tôi sẽ tiếp tục thuê xe tại BeFree.”",
    faq_kicker:"Hỏi đáp", faq_title:"Câu hỏi thường gặp", faq1_q:"Cửa hàng BeFree ở đâu?", faq1_a:"BeFree Rental tọa lạc tại địa chỉ 46 Nguyễn Đức Cảnh, Hải Châu, Đà Nẵng. Khách hàng có thể đến trực tiếp cửa hàng để nhận xe và được tư vấn dịch vụ hoặc liên hệ qua hotline 0988616168.", faq2_q:"BeFree có hỗ trợ giao xe tận nơi không?", faq2_a:"BeFree hỗ trợ giao xe tại sân bay, nhà ga, khách sạn và các địa điểm theo yêu cầu tại Đà Nẵng. Khách hàng chỉ cần cung cấp địa điểm và thời gian nhận xe khi đặt thuê.", faq3_q:"Chính sách đổi pin như thế nào?", faq3_a:"BeFree hỗ trợ miễn phí 1 lần đổi pin mỗi ngày tại các trạm đổi pin và không giới hạn số lần đổi pin tại cửa hàng trong thời gian thuê xe. Chính sách áp dụng theo điều kiện thuê xe của BeFree.", faq4_q:"Tôi cần chuẩn bị những giấy tờ gì để thuê xe?", faq4_a:"Khách hàng cần chuẩn bị CCCD đối với khách Việt Nam hoặc hộ chiếu đối với khách nước ngoài để xác minh thông tin và hoàn tất thủ tục thuê xe.", faq5_q:"Tôi có cần đặt cọc khi thuê xe không?", faq5_a:"BeFree Rental không yêu cầu khách hàng đặt cọc khi thuê xe. Bạn chỉ cần cung cấp thông tin cá nhân, hoàn tất thủ tục ký hợp đồng và thanh toán sau khi ký hợp đồng. Thủ tục đơn giản, nhanh chóng và thuận tiện.", faq6_q:"Làm thế nào để liên hệ BeFree Rental khi cần hỗ trợ?", faq6_a:"Khách hàng có thể liên hệ BeFree qua hotline 0988 616 168, WhatsApp, Zalo, WeChat hoặc KakaoTalk. Đội ngũ BeFree luôn sẵn sàng hỗ trợ và giải đáp thắc mắc trong quá trình thuê xe.",
    contract_title:"Điều khoản hợp đồng", party_a_title:"Quyền và nghĩa vụ của Bên cho thuê (Bên A)", party_a_rights_title:"Quyền của Bên A", party_a_right_1:"Nhận đủ tiền thuê xe khi bàn giao xe máy.", party_a_right_2:"Nhận lại xe đúng hạn và giữ nguyên tình trạng như khi giao xe.", party_a_right_3:"Yêu cầu Bên B bồi thường mọi thiệt hại, mất phụ tùng, sử dụng sai mục đích hoặc cho thuê lại xe trái phép.", party_a_right_4:"Yêu cầu Bên B thanh toán mọi khoản phạt vi phạm giao thông, bao gồm phạt trực tiếp và phạt qua hệ thống camera, phát sinh trong thời gian thuê.", party_a_obligations_title:"Nghĩa vụ của Bên A", party_a_obligation_1:"Giao xe đúng loại đã thỏa thuận, đúng giờ, tại địa điểm đã định, trong tình trạng sạch sẽ và đầy đủ phụ kiện cần thiết.", party_a_obligation_2:"Chịu toàn bộ trách nhiệm pháp lý về nguồn gốc và quyền sở hữu hợp pháp của xe cho thuê.", party_b_title:"Quyền và nghĩa vụ của Bên thuê (Bên B)", party_b_rights_title:"Quyền của Bên B", party_b_right_1:"Được Bên A hỗ trợ kỹ thuật và trợ giúp trong suốt thời gian thuê.", party_b_right_2:"Nhận xe đúng loại đã thỏa thuận, đúng giờ, tại địa điểm đã định và đầy đủ phụ kiện.", party_b_right_3:"Được sử dụng xe không giới hạn quãng đường trong thời gian thuê.", party_b_right_4:"Được đổi pin miễn phí 01 lần/ngày tại các trạm đổi pin và đổi pin miễn phí không giới hạn tại cửa hàng của Bên A trong thời gian thuê.", party_b_obligations_title:"Nghĩa vụ của Bên B", party_b_obligation_1:"Xuất trình giấy tờ tùy thân hợp lệ (CCCD/hộ chiếu) và thanh toán đủ tiền thuê khi nhận xe.", party_b_obligation_2:"Kiểm tra kỹ xe khi bàn giao và có trách nhiệm bảo quản xe cùng phụ kiện trong thời gian thuê.", party_b_obligation_3:"Trả xe đúng giờ. Nếu trả xe muộn, Bên B phải thanh toán phụ phí theo quy định tại Điều 3.", party_b_obligation_4:"Tuân thủ nghiêm Luật Giao thông đường bộ và chịu toàn bộ trách nhiệm về mọi khoản phạt vi phạm giao thông, bao gồm phạt trực tiếp và phạt qua camera, phát sinh trong thời gian thuê, kể cả sau khi hợp đồng kết thúc.", party_b_obligation_5:"Không sử dụng xe vào mục đích bất hợp pháp, đua xe, cầm cố, cho thuê lại hoặc cho người không đủ điều kiện/chưa có giấy phép lái xe điều khiển.", party_b_obligation_6:"Bồi thường 100% chi phí sửa chữa hoặc thay thế theo giá chính thức/thị trường đối với mọi hư hỏng hoặc mất phụ tùng.", common_terms_title:"Điều khoản chung của hai bên", common_term_1:"Hợp đồng này và Biên bản bàn giao xe tạo thành một thỏa thuận thống nhất. Hai Bên cam kết thực hiện nghiêm túc mọi điều khoản. Không bên nào được đơn phương sửa đổi, đình chỉ hoặc chấm dứt hợp đồng nếu chưa được bên kia đồng ý.", common_term_2:"Mọi tranh chấp phát sinh trong quá trình thực hiện hợp đồng sẽ được giải quyết trước hết bằng thương lượng hòa giải. Nếu không đạt được thỏa thuận, tranh chấp được đưa trước cơ quan có thẩm quyền/tòa án để giải quyết và bên thua sẽ chịu mọi chi phí liên quan.", common_term_3:"Hợp đồng kết thúc khi Bên B trả lại xe ở tình trạng chấp nhận được cho Bên A và thanh toán hết các khoản phí còn tồn nợ.", common_term_4:"Hợp đồng có hiệu lực kể từ khi hai Bên ký và được lập thành 02 bản có giá trị pháp lý ngang nhau, mỗi Bên giữ 01 bản.",
    footer_text:"Cho thuê xe máy điện an toàn, tiết kiệm và tiện lợi tại Đà Nẵng.", footer_links:"Khám phá", footer_contact:"Liên hệ", footer_rights:"Đã đăng ký bản quyền."
  },
  zh: {
    nav_about:"关于我们", nav_services:"服务项目", nav_faq:"问题", nav_contact:"联系我们", nav_book:"立即预订",
    hero_eyebrow:"按自己的方式感受岘港的活力", hero_title:"您的旅程。<br><em>您的自由。</em>", hero_text:"从海风轻拂的美溪海滩、郁郁葱葱的山茶半岛，到夜晚灯火璀璨的桥梁，岘港处处都有等待您亲自探索的角落。骑上 BeFree 现代、平稳、洁净的电动踏板车，安全舒适地畅游全城，全天候为您服务。", hero_cta:"租一辆车", hero_call:"立即致电",
    stat_support:"客服支持", stat_day:"越南盾 / 天", stat_safe:"整洁安全", rating:"客户评分",
    intro_note:"随时准备", about_kicker:"欢迎来到 BEFREE！", about_title:"自由探索宜居之城", about_text:"Befree E-Scooter Rental 为到访岘港的游客提供便捷、环保的出行方案。我们相信，每一段旅程都值得轻松而难忘。Befree 提供简单快捷的电动踏板车租赁服务和多项免费便利服务，助您自由探索城中的每条街道、海滩和美丽景点。", about_li1:"无需驾驶证即可租车，手续简便，确认迅速", about_li2:"配备头盔及必要配件", about_li3:"旅途中提供贴心的本地支持",
    services_kicker:"我们的服务", services_title:"让您的骑行更加轻松", service1_title:"车辆", service1_text:"VinFast Evo Lite 轻巧易骑，无需驾驶证，行驶平稳安全，让您舒适地畅游城市一整天。", service2_title:"灵活租期", service2_text:"可按天、周或月安排租期；需要时可轻松调整取车或还车时间，也可延长租期。", service3_title:"送车上门与全天候支持", service3_text:"我们准时送车上门；无论何时需要，团队都随时为您提供贴心建议和全天候支持。",
    why_kicker:"选择我们的理由", why_title:"每一段旅程都安心", why1_title:"无需押金", why1_text:"流程简单，不需要缴纳押金。只需出示公民身份证或护照，即可签署租赁合同并直接取车。", why2_title:"免费换电", why2_text:"无需等待长时间充电。您可以在门店或 VinFast 换电站快速更换电池。", why3_title:"全新、洁净且安全的车辆", why3_text:"100% 为全新 VinFast 电动车。每次出行前都会彻底清洁并进行技术检查，确保行驶平稳安全。", why4_title:"价格透明", why4_text:"按日、周、月清楚标明租赁价格。承诺不收取隐藏费用，让您轻松规划旅行预算。",
    booking_kicker:"立即预订", booking_title:"几分钟后即可上路", booking_text:"填写表格后，BeFree 团队会立即确认您的预订。", booking_support:"全天候可用", booking_price:"越南盾 / 天", price_table_title:"租车价格", price_table_days:"租期", price_table_rate:"越南盾 / 天", price_1_2_days:"1-2 天", price_3_4_days:"3-4 天", price_5_29_days:"5-29 天", price_30_days:"30 天以上", form_name:"姓名", form_phone:"电话号码", form_date:"租车日期", form_days:"租赁天数", form_chat_platform:"选择平台，以便我们通过手机号 {phone} 联系您", form_estimate:"预计总价", form_estimate_from:"每天低至 70,000 越南盾", form_submit:"发送预订请求", form_wait:"请等待 {seconds} 秒", form_name_placeholder:"您的姓名", form_phone_placeholder:"09xx xxx xxx", form_days_placeholder:"输入天数", form_success:"您的预订请求已发送成功。", form_error:"无法发送请求，请使用 WhatsApp。",
    reviews_kicker:"客户故事", reviews_title:"宾客评价", review1:"“我在岘港租用了 BeFree 的电动踏板车，对车辆的整洁和员工有礼的服务非常满意。车辆品质好，体验很棒。”", review2:"“租车流程非常快捷、简单。车子骑起来平稳，行驶稳定。团队服务周到，优惠活动也很吸引人。”", review3:"“我多次租用 BeFree 的车，每次都很满意。车辆保养良好，价格令人满意，客服也始终随时提供帮助。”",
    faq_kicker:"常见问题", faq_title:"常见问题解答", faq1_q:"BeFree 门店在哪里？", faq1_a:"BeFree Rental 位于岘港海州郡 Nguyễn Đức Cảnh 街 46 号。您可以到店取车并咨询服务，也可以拨打 0988616168 联系我们。", faq2_q:"BeFree 提供送车服务吗？", faq2_a:"BeFree 可按要求将车辆送至岘港机场、火车站、酒店及其他地点。预订时只需告知取车地点和时间。", faq3_q:"换电政策是怎样的？", faq3_a:"租车期间，BeFree 每天在换电站提供 1 次免费换电，在门店换电则不限次数。此政策适用 BeFree 的租车条款。", faq4_q:"租车需要准备哪些证件？", faq4_a:"越南客户需准备公民身份证（CCCD），外国客户需准备护照，以便核实信息并完成租车手续。", faq5_q:"租车需要交押金吗？", faq5_a:"BeFree Rental 租车无需押金。您只需提供个人信息、完成并签署租赁合同，然后在签约后付款。手续简单、快捷、方便。", faq6_q:"需要帮助时如何联系 BeFree Rental？", faq6_a:"您可以通过热线 0988 616 168、WhatsApp、Zalo、微信（WeChat）或 KakaoTalk 联系 BeFree。租车期间，BeFree 团队随时为您提供协助并解答疑问。",
    contract_title:"租赁合同条款", party_a_title:"出租方（甲方）的权利和义务", party_a_rights_title:"甲方权利", party_a_right_1:"在交付摩托车时一次性收取全部租金。", party_a_right_2:"按时收回摩托车，并要求车辆保持与交付时相同的状况。", party_a_right_3:"要求乙方赔偿摩托车的损坏、部件遗失、违规使用或未经授权转租造成的损失。", party_a_right_4:"要求乙方承担租赁期内现场或摄像头记录的全部交通违规罚款。", party_a_obligations_title:"甲方义务", party_a_obligation_1:"按约定型号、时间和地点交付车辆，车辆应保持清洁并配齐所有必要配件。", party_a_obligation_2:"对租赁摩托车的来源及合法所有权承担全部法律责任。", party_b_title:"承租方（乙方）的权利和义务", party_b_rights_title:"乙方权利", party_b_right_1:"在整个租赁期内获得甲方的技术支持与协助。", party_b_right_2:"按约定型号、时间和地点接收车辆，并获得完整配件。", party_b_right_3:"在租赁期内享受不限里程。", party_b_right_4:"租赁期内可在换电站每日免费换电一次，并可在甲方门店无限次免费换电。", party_b_obligations_title:"乙方义务", party_b_obligation_1:"出示有效身份证件（身份证/护照），并在接收摩托车时支付全部租金。", party_b_obligation_2:"交车时仔细检查摩托车，并在租赁期间妥善保管车辆及其配件。", party_b_obligation_3:"按时归还摩托车。如逾期归还，乙方应根据第3条规定支付额外费用。", party_b_obligation_4:"严格遵守道路交通法，并对租赁期间产生的全部交通违规罚款（包括现场处罚和摄像头记录罚款）承担完全责任，即使合同终止后仍需负责。", party_b_obligation_5:"不得将摩托车用于非法用途、赛车、典当、转租，亦不得让任何不具备资格或无驾驶资格的人员驾驶。", party_b_obligation_6:"摩托车或部件发生损坏或遗失时，乙方应按官方或市场价格赔偿100%的维修或更换费用。", common_terms_title:"双方共同条款", common_term_1:"本合同与车辆交接记录构成不可分割的完整协议。双方承诺严格履行本合同全部条款；未经双方同意，任何一方不得单方面修改、暂停或终止本合同。", common_term_2:"执行本合同时如发生争议，应首先通过友好协商解决。如无法达成协议，争议应提交有管辖权的机构或法院解决，败诉方承担全部相关费用。", common_term_3:"乙方将摩托车完好归还甲方并结清全部未付款项后，本合同即告终止。", common_term_4:"本合同经双方签署后生效，一式两份，具有同等法律效力，双方各执一份。",
    footer_text:"岘港安全、实惠、便捷的电动车租赁服务。", footer_links:"浏览", footer_contact:"联系方式", footer_rights:"版权已注册。"
  },
  ko: {
    nav_about:"회사 소개", nav_services:"서비스", nav_faq:"질문", nav_contact:"문의하기", nav_book:"지금 예약",
    hero_eyebrow:"나만의 방식으로 다낭의 활기를 느껴보세요", hero_title:"여행의 즐거움.<br><em>완전한 자유.</em>", hero_text:"바닷바람이 부는 미케 해변과 푸른 선짜 반도부터 밤마다 불빛으로 빛나는 다리까지, 다낭에는 직접 둘러볼 만한 숨은 명소가 가득합니다. BeFree의 현대적이고 부드럽고 깨끗한 전기 스쿠터와 함께 24시간 안전하고 편안하게 도시 곳곳을 누벼 보세요.", hero_cta:"스쿠터 대여", hero_call:"지금 전화",
    stat_support:"지원", stat_day:"베트남동 / 일", stat_safe:"청결 & 안전", rating:"고객 평점",
    intro_note:"항상 준비됨", about_kicker:"BEFREE에 오신 것을 환영합니다!", about_title:"살기 좋은 도시를 자유롭게 탐험하세요", about_text:"Befree E-Scooter Rental은 다낭을 방문하는 여행객에게 편리하고 친환경적인 이동 수단을 제공합니다. 모든 여정은 편안하고 기억에 남을 만한 가치가 있다고 믿습니다. 간편하고 빠른 전기 스쿠터 대여 서비스와 다양한 무료 편의 서비스를 통해 Befree와 함께 도시의 골목, 해변, 아름다운 명소를 자유롭게 둘러보세요.", about_li1:"운전면허 없이 대여 가능, 간편한 절차와 빠른 확인", about_li2:"헬멧과 필수 용품 포함", about_li3:"여행 내내 친절한 현지 지원",
    services_kicker:"서비스", services_title:"좋은 여행에 필요한 모든 것", service1_title:"차량", service1_text:"가볍고 운전하기 쉬운 VinFast Evo Lite는 운전면허가 필요 없으며 부드럽고 안전하게 주행해 하루 종일 편안하게 도시를 둘러볼 수 있습니다.", service2_title:"유연한 대여 기간", service2_text:"일·주·월 단위로 일정을 정하고, 필요하면 픽업 또는 반납 시간을 쉽게 변경하거나 대여 기간을 연장할 수 있습니다.", service3_title:"차량 배송 및 24시간 지원", service3_text:"정해진 시간에 숙소까지 차량을 배송해 드리며, 필요할 때마다 저희 팀이 언제든 친절한 안내와 지원을 제공합니다.",
    why_kicker:"선택 이유", why_title:"모든 여행에서 안심하세요", why1_title:"보증금 없음", why1_text:"간단한 절차로 보증금을 맡기지 않습니다. CCCD 또는 여권만 제시하면 계약서에 서명하고 바로 차량을 받을 수 있습니다.", why2_title:"무료 배터리 교환", why2_text:"긴 충전 시간을 기다릴 필요가 없습니다. 매장이나 VinFast 배터리 교환소에서 몇 분 만에 배터리를 교환할 수 있습니다.", why3_title:"신형·청결·안전한 차량", why3_text:"100% 신형 VinFast 전기 스쿠터를 제공하며, 매 여행 전에 깨끗하게 세척하고 기술 점검을 완료해 부드럽고 안전하게 운행합니다.", why4_title:"투명한 가격", why4_text:"일·주·월 단위의 임대료를 명확하게 표시합니다. 숨은 비용이 발생하지 않아 여행 예산을 쉽게 계획할 수 있습니다.",
    booking_kicker:"지금 예약", booking_title:"몇 분 후 출발 준비 완료", booking_text:"양식을 작성하면 BeFree 팀이 예약을 바로 확인해 드립니다.", booking_support:"항상 이용 가능", booking_price:"베트남동 / 일", price_table_title:"대여 요금", price_table_days:"대여 기간", price_table_rate:"베트남동 / 일", price_1_2_days:"1-2일", price_3_4_days:"3-4일", price_5_29_days:"5-29일", price_30_days:"30일 이상", form_name:"이름", form_phone:"전화번호", form_date:"대여 날짜", form_days:"대여 일수", form_chat_platform:"전화번호 {phone}(으)로 연락할 플랫폼을 선택해 주세요", form_estimate:"예상 금액", form_estimate_from:"1일 최소 70,000 베트남동", form_submit:"예약 요청 보내기", form_wait:"{seconds}초 기다려 주세요", form_name_placeholder:"이름을 입력하세요", form_phone_placeholder:"09xx xxx xxx", form_days_placeholder:"일수를 입력하세요", form_success:"예약 요청이 성공적으로 전송되었습니다.", form_error:"요청을 보내지 못했습니다. WhatsApp을 이용해 주세요.",
    reviews_kicker:"고객 후기", reviews_title:"고객이 말하는 BeFree", review1:"“다낭에서 BeFree 스쿠터를 빌렸는데 차량이 깨끗하고 직원들의 예의 바른 태도에 매우 만족했습니다. 차량 품질도 좋고 경험도 훌륭했습니다.”", review2:"“대여 절차가 매우 빠르고 간편했습니다. 스쿠터는 부드럽고 안정적으로 달렸습니다. 직원들이 세심하게 도와주었고 할인 혜택도 매력적이었습니다.”", review3:"“BeFree를 여러 번 이용했는데 항상 만족했습니다. 차량 관리가 잘 되어 있고 가격도 만족스러우며 지원도 언제나 받을 수 있습니다.”",
    faq_kicker:"FAQ", faq_title:"자주 묻는 질문", faq1_q:"BeFree 매장은 어디에 있나요?", faq1_a:"BeFree Rental은 다낭시 하이쩌우군 응우옌득까인 거리 46번지에 있습니다. 매장에 방문해 차량을 인수하고 서비스 상담을 받거나 0988616168로 문의하실 수 있습니다.", faq2_q:"BeFree는 차량 배달을 지원하나요?", faq2_a:"다낭 공항, 기차역, 호텔 및 요청하신 장소로 차량을 배달해 드립니다. 예약 시 픽업 장소와 시간을 알려주시면 됩니다.", faq3_q:"배터리 교환 정책은 어떻게 되나요?", faq3_a:"대여 기간 동안 교환소에서 하루 1회 무료로 배터리를 교환할 수 있으며, 매장에서는 횟수 제한 없이 교환할 수 있습니다. 본 정책은 BeFree 대여 약관에 따릅니다.", faq4_q:"대여하려면 어떤 서류를 준비해야 하나요?", faq4_a:"정보 확인 및 대여 절차 완료를 위해 베트남 고객은 시민 신분증(CCCD), 외국인 고객은 여권을 준비해야 합니다.", faq5_q:"대여 시 보증금을 내야 하나요?", faq5_a:"BeFree Rental은 대여 보증금을 받지 않습니다. 개인 정보를 제공하고 대여 계약서 작성 및 서명을 마친 뒤 결제하시면 됩니다. 절차는 간단하고 빠르며 편리합니다.", faq6_q:"도움이 필요할 때 BeFree Rental에 어떻게 연락하나요?", faq6_a:"핫라인 0988 616 168, WhatsApp, Zalo, WeChat 또는 KakaoTalk으로 BeFree에 연락하실 수 있습니다. 대여 중 문의 사항이 있으면 BeFree 팀이 언제든 도와드립니다.",
    contract_title:"임대 계약 조건", party_a_title:"임대인(갑)의 권리와 의무", party_a_rights_title:"갑의 권리", party_a_right_1:"오토바이를 인도받을 때 임대료 전액을 받습니다.", party_a_right_2:"정해진 기한에 오토바이를 원래 인도 상태 그대로 돌려받습니다.", party_a_right_3:"오토바이의 손상, 부품 분실, 부정 사용 또는 무단 재대여에 대해 을에게 손해배상을 요구할 수 있습니다.", party_a_right_4:"임대 기간 중 현장 또는 카메라로 적발된 모든 교통 위반 벌금을 을이 지급하도록 요구할 수 있습니다.", party_a_obligations_title:"갑의 의무", party_a_obligation_1:"약정한 모델의 오토바이를 정해진 시간과 장소에 깨끗한 상태로 인도하고 필요한 모든 부속품을 제공합니다.", party_a_obligation_2:"임대 오토바이의 출처와 합법적인 소유권에 대한 모든 법적 책임을 부담합니다.", party_b_title:"임차인(을)의 권리와 의무", party_b_rights_title:"을의 권리", party_b_right_1:"임대 기간 내내 갑으로부터 기술 지원과 도움을 받습니다.", party_b_right_2:"약정한 모델의 오토바이를 정해진 시간과 장소에서 모든 부속품과 함께 받습니다.", party_b_right_3:"임대 기간 동안 주행 거리 제한 없이 이용할 수 있습니다.", party_b_right_4:"임대 기간 중 배터리 교환소에서 하루 1회 무료로 배터리를 교환하고, 갑의 매장에서는 무제한 무료 교환을 받을 수 있습니다.", party_b_obligations_title:"을의 의무", party_b_obligation_1:"유효한 신분증(신분증/여권)을 제시하고 오토바이를 받을 때 임대료 전액을 지급합니다.", party_b_obligation_2:"인도 시 오토바이를 꼼꼼히 확인하고 임대 기간 동안 오토바이와 부속품을 책임지고 보관합니다.", party_b_obligation_3:"오토바이를 제때 반납합니다. 늦게 반납하는 경우 제3조에 정해진 추가 요금을 지급합니다.", party_b_obligation_4:"도로교통법을 엄격히 준수하며 임대 기간 중 현장 또는 카메라로 적발된 모든 교통 위반 벌금을 계약 종료 후에도 완전히 책임집니다.", party_b_obligation_5:"오토바이를 불법 목적, 경주, 담보 제공, 재대여 등에 사용하거나 자격이나 면허가 없는 사람에게 운행을 맡기지 않습니다.", party_b_obligation_6:"오토바이 또는 부품이 손상·분실된 경우 공식 또는 시장 가격 기준으로 수리·교체 비용의 100%를 배상합니다.", common_terms_title:"양 당사자의 공통 조항", common_term_1:"본 계약과 인도 확인서는 하나의 완전한 계약을 구성합니다. 양 당사자는 모든 조항을 엄격히 이행하며, 상호 동의 없이 일방적으로 계약을 변경·중지·해지할 수 없습니다.", common_term_2:"본 계약 이행 중 분쟁이 발생하면 우선 우호적인 협상으로 해결합니다. 합의에 이르지 못하면 관할 권한을 가진 기관 또는 법원에 분쟁을 제출하며, 패소 당사자가 모든 관련 비용을 부담합니다.", common_term_3:"을이 오토바이를 적절한 상태로 갑에게 반납하고 미결제 비용을 모두 정산하면 본 계약은 종료됩니다.", common_term_4:"본 계약은 양 당사자가 서명하는 즉시 효력이 발생하며 법적 효력이 동일한 두 부로 작성되고, 각 당사자가 한 부씩 보관합니다.",
    footer_text:"다낭의 안전하고 저렴하며 편리한 전기 스쿠터 대여.", footer_links:"둘러보기", footer_contact:"연락처", footer_rights:"저작권 등록 완료."
  },
  ru: {
    nav_about:"О нас", nav_services:"Услуги", nav_faq:"Вопросы", nav_contact:"Контакты", nav_book:"Забронировать",
    hero_eyebrow:"Почувствуйте ритм Дананга по-своему", hero_title:"Ваш маршрут.<br><em>Ваша свобода.</em>", hero_text:"От продуваемого морским бризом пляжа Микхе и зеленого полуострова Шонча до мостов, сияющих ночными огнями, — в Дананге много уголков, которые ждут, чтобы вы открыли их самостоятельно. Исследуйте город безопасно и комфортно круглосуточно на современных, плавных и чистых электроскутерах BeFree.", hero_cta:"Арендовать скутер", hero_call:"Позвонить",
    stat_support:"Поддержка", stat_day:"VND / день", stat_safe:"Чисто и безопасно", rating:"Рейтинг клиентов",
    intro_note:"Всегда готовы", about_kicker:"ДОБРО ПОЖАЛОВАТЬ В BEFREE!", about_title:"Свободно исследуйте город, в котором хочется жить", about_text:"Befree E-Scooter Rental предлагает гостям Дананга удобный и экологичный способ передвижения. Мы верим, что каждое путешествие должно быть легким и запоминающимся. Благодаря простому и быстрому сервису аренды электроскутеров и множеству бесплатных удобств Befree поможет вам свободно исследовать каждую улицу, пляж и красивое место города.", about_li1:"Аренда без водительских прав, простое оформление и быстрое подтверждение", about_li2:"Шлемы и необходимые аксессуары включены", about_li3:"Дружелюбная местная поддержка во время поездки",
    services_kicker:"Наши услуги", services_title:"Все для отличной поездки", service1_title:"Транспорт", service1_text:"Легкий и удобный в управлении VinFast Evo Lite не требует водительских прав и едет плавно и безопасно, чтобы вы могли с комфортом исследовать город весь день.", service2_title:"Гибкий срок аренды", service2_text:"Планируйте аренду на день, неделю или месяц; при необходимости легко измените время получения или возврата либо продлите аренду.", service3_title:"Доставка и поддержка 24/7", service3_text:"Мы доставим скутер прямо к вам и точно в срок. Наша команда всегда готова дать совет и помочь — круглосуточно, когда вам это нужно.",
    why_kicker:"Почему выбирают нас", why_title:"Спокойствие на каждом километре", why1_title:"Без залога", why1_text:"Простое оформление без внесения залога. Достаточно предъявить CCCD или паспорт, подписать договор аренды и сразу получить скутер.", why2_title:"Бесплатная замена аккумулятора", why2_text:"Не нужно ждать длительной зарядки. Аккумулятор можно быстро заменить в магазине или на станции обмена батарей VinFast.", why3_title:"Новые, чистые и безопасные скутеры", why3_text:"100% новые электроскутеры VinFast тщательно очищаются и проходят техническую проверку перед каждой поездкой для плавной и безопасной езды.", why4_title:"Прозрачные цены", why4_text:"Понятные цены на аренду по дням, неделям и месяцам. Скрытых платежей нет, поэтому легко заранее спланировать бюджет поездки.",
    booking_kicker:"Бронировать", booking_title:"Готовы ехать через несколько минут", booking_text:"Заполните форму, и команда BeFree сразу подтвердит вашу заявку.", booking_support:"Всегда доступны", booking_price:"VND в день", price_table_title:"Стоимость аренды", price_table_days:"Срок аренды", price_table_rate:"VND / день", price_1_2_days:"1-2 дня", price_3_4_days:"3-4 дня", price_5_29_days:"5-29 дней", price_30_days:"30+ дней", form_name:"Полное имя", form_phone:"Номер телефона", form_date:"Дата аренды", form_days:"Количество дней", form_chat_platform:"Выберите платформу для связи по номеру {phone}", form_estimate:"Предварительная сумма", form_estimate_from:"От 70 000 VND / день", form_submit:"Отправить запрос", form_wait:"Подождите {seconds} с", form_name_placeholder:"Ваше имя", form_phone_placeholder:"09xx xxx xxx", form_days_placeholder:"Введите количество дней", form_success:"Запрос на бронирование успешно отправлен.", form_error:"Не удалось отправить запрос. Попробуйте WhatsApp.",
    contract_title:"Условия договора", party_a_title:"Права и обязанности арендодателя (Сторона A)", party_a_rights_title:"Права Стороны A", party_a_right_1:"Получить полную оплату арендной платы при передаче мотоцикла.", party_a_right_2:"Получить мотоцикл обратно вовремя и в том же состоянии, в котором он был передан.", party_a_right_3:"Потребовать от Стороны B компенсации ущерба, утраты деталей, ненадлежащего использования или несанкционированной сдачи мотоцикла в субаренду.", party_a_right_4:"Потребовать от Стороны B оплаты всех штрафов за нарушения дорожного движения, включая штрафы на месте и зафиксированные камерами, возникших в период аренды.", party_a_obligations_title:"Обязанности Стороны A", party_a_obligation_1:"Передать мотоцикл согласованной модели вовремя, в указанном месте, в чистом состоянии и со всеми необходимыми аксессуарами.", party_a_obligation_2:"Нести полную юридическую ответственность за происхождение и законное право собственности на арендованный мотоцикл.", party_b_title:"Права и обязанности арендатора (Сторона B)", party_b_rights_title:"Права Стороны B", party_b_right_1:"Получать техническую поддержку и помощь от Стороны A в течение всего периода аренды.", party_b_right_2:"Получить мотоцикл согласованной модели вовремя, в указанном месте и полностью укомплектованный аксессуарами.", party_b_right_3:"Пользоваться неограниченным пробегом в течение периода аренды.", party_b_right_4:"Получать один бесплатный обмен аккумулятора в день на станциях замены и неограниченное количество бесплатных обменов в магазине Стороны A в течение периода аренды.", party_b_obligations_title:"Обязанности Стороны B", party_b_obligation_1:"Предъявить действительные документы (удостоверение личности/паспорт) и оплатить всю арендную плату при получении мотоцикла.", party_b_obligation_2:"Внимательно осмотреть мотоцикл при передаче и сохранить мотоцикл и его аксессуары в течение периода аренды.", party_b_obligation_3:"Вернуть мотоцикл вовремя. При просрочке Сторона B должна оплатить дополнительные сборы согласно Статье 3.", party_b_obligation_4:"Строго соблюдать дорожное законодательство и полностью отвечать за все штрафы за нарушения, включая штрафы на месте и зафиксированные камерами, возникшие в период аренды, даже после прекращения договора.", party_b_obligation_5:"Не использовать мотоцикл в незаконных целях, гонках, залоге, субаренде и не допускать к управлению лиц без соответствующей квалификации или водительских прав.", party_b_obligation_6:"В случае повреждения или утраты деталей возместить 100% стоимости ремонта или замены по официальным или рыночным ценам.", common_terms_title:"Общие положения обеих сторон", common_term_1:"Настоящий Договор и Акт передачи являются единым договором. Обе Стороны обязуются строго соблюдать все положения. Ни одна Сторона не вправе в одностороннем порядке изменять, приостанавливать или расторгать Договор без взаимного согласия.", common_term_2:"Споры, возникающие при исполнении Договора, сначала разрешаются путем добросовестных переговоров. Если соглашение не достигнуто, спор передается в компетентный орган или суд, а проигравшая сторона несет все связанные расходы.", common_term_3:"Договор прекращается после того, как Сторона B возвратит мотоцикл Стороне A в приемлемом состоянии и оплатит все непогашенные сборы.", common_term_4:"Договор вступает в силу с момента подписания обеими Сторонами и составляется в двух экземплярах одинаковой юридической силы, по одному экземпляру для каждой Стороны.",
  }
};

const languageMeta = {
  en: {name:"English", flag:"fi-gb"},
  vi: {name:"Tiếng Việt", flag:"fi-vn"},
  zh: {name:"中文", flag:"fi-cn"},
  ko: {name:"한국어", flag:"fi-kr"},
  ru: {name:"Русский", flag:"fi-ru"}
};

const langButton = document.getElementById("langButton");
const langMenu = document.getElementById("langMenu");
const currentFlag = document.getElementById("currentFlag");
const currentLanguage = document.getElementById("currentLanguage");

function applyLanguage(code) {
  const safeCode = languageMeta[code] ? code : "en";
  const data = translations[safeCode] || translations.en;
  document.documentElement.lang = safeCode;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (data[key]) element.innerHTML = data[key];
  });
  document.getElementById("fullname").placeholder = data.form_name_placeholder || "";
  document.getElementById("phone").placeholder = data.form_phone_placeholder || "";
  document.getElementById("days").placeholder = data.form_days_placeholder || "";
  updateChatPlatformLabel(safeCode, data);
  refreshEstimate(data);
  const meta = languageMeta[safeCode];
  currentLanguage.textContent = meta.name;
  currentFlag.className = `fi ${meta.flag}`;
  localStorage.setItem("befree-language", safeCode);
}

langButton.addEventListener("click", () => {
  const open = langMenu.classList.toggle("open");
  langButton.setAttribute("aria-expanded", String(open));
});
langMenu.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    langMenu.classList.remove("open");
    langButton.setAttribute("aria-expanded", "false");
  });
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".language")) {
    langMenu.classList.remove("open");
    langButton.setAttribute("aria-expanded", "false");
  }
});

applyLanguage(localStorage.getItem("befree-language") || "en");

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav") && !event.target.closest(".menu-toggle")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});
window.addEventListener("scroll", () => {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
  if (langMenu.classList.contains("open")) {
    langMenu.classList.remove("open");
    langButton.setAttribute("aria-expanded", "false");
  }
}, { passive: true });

const introSlider = document.querySelector("[data-slider]");

if (introSlider) {
  const slides = [...introSlider.querySelectorAll(".intro-slider__slide")];
  const dotsContainer = introSlider.querySelector(".intro-slider__dots");
  const previousButton = introSlider.querySelector(".intro-slider__button--prev");
  const nextButton = introSlider.querySelector(".intro-slider__button--next");
  let currentSlide = 0;
  let autoplayTimer;
  let touchStartX = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "intro-slider__dot";
    dot.setAttribute("aria-label", `Show image ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = [...dotsContainer.querySelectorAll(".intro-slider__dot")];

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentSlide;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === currentSlide;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
  }

  function startAutoplay() {
    stopAutoplay();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      autoplayTimer = window.setInterval(() => showSlide(currentSlide + 1), 3000);
    }
  }

  previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startAutoplay();
  });
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startAutoplay();
  });

  introSlider.addEventListener("mouseenter", stopAutoplay);
  introSlider.addEventListener("mouseleave", startAutoplay);
  introSlider.addEventListener("focusin", stopAutoplay);
  introSlider.addEventListener("focusout", startAutoplay);
  introSlider.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  introSlider.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 50) {
      showSlide(currentSlide + (distance < 0 ? 1 : -1));
    }
  }, { passive: true });

  showSlide(0);
  startAutoplay();
}

const dateInput = document.getElementById("date");
const daysInput = document.getElementById("days");
const totalPrice = document.getElementById("totalPrice");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("fullname");
const today = new Date();
const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
dateInput.min = todayString;

function updateChatPlatformLabel(code, data) {
  const legend = document.querySelector(".chat-platform legend");
  if (!legend) return;
  const safeCode = code && languageMeta[code] ? code : (languageMeta[localStorage.getItem("befree-language")] ? localStorage.getItem("befree-language") : "en");
  const activeData = data || translations[safeCode] || translations.en;
  const phoneInputValue = document.getElementById("phone")?.value.trim() || "";
  const phone = phoneInputValue || activeData.form_phone_placeholder || "";
  legend.textContent = (activeData.form_chat_platform || "").replace("{phone}", phone);
}

function refreshEstimate(data) {
  const totalPriceElement = document.getElementById("totalPrice");
  const daysElement = document.getElementById("days");
  if (!totalPriceElement || !daysElement) return;

  const enteredDays = Number.parseInt(daysElement.value, 10);
  if (!daysElement.value || !Number.isFinite(enteredDays) || enteredDays < 1) {
    totalPriceElement.textContent = data.form_estimate_from || "From 70,000 VND / day";
    return;
  }

  const rental = calculateRental(enteredDays);
  totalPriceElement.textContent = `${rental.total.toLocaleString("vi-VN")} ₫`;
}

function calculateRental(days) {
  const enteredDays = Number.isFinite(days) && days >= 1 ? days : 1;
  let dailyRate = 150000;
  if (enteredDays >= 30) {
    dailyRate = 70000;
  } else if (enteredDays >= 5) {
    dailyRate = 130000;
  } else if (enteredDays >= 3) {
    dailyRate = 140000;
  }

  return { enteredDays, dailyRate, total: enteredDays * dailyRate };
}

function updatePrice() {
  const safeCode = languageMeta[localStorage.getItem("befree-language")] ? localStorage.getItem("befree-language") : "en";
  const data = translations[safeCode] || translations.en;
  refreshEstimate(data);
}
daysInput.addEventListener("input", updatePrice);
daysInput.addEventListener("blur", () => {
  if (!daysInput.value) {
    updatePrice();
  } else {
    const days = Math.max(1, Number.parseInt(daysInput.value, 10) || 1);
    daysInput.value = String(days);
    updatePrice();
  }
});
phoneInput.addEventListener("input", () => updateChatPlatformLabel());

const chatPlatformInputs = document.querySelectorAll('input[name="chatPlatform"]');

chatPlatformInputs.forEach((input) => {
  input.addEventListener("click", () => {
    if (input.dataset.wasChecked === "true") {
      input.checked = false;
      input.dataset.wasChecked = "false";
      return;
    }

    chatPlatformInputs.forEach((item) => {
      item.dataset.wasChecked = "false";
    });
    input.dataset.wasChecked = "true";
  });
});

function openMobileChatWithBooking(platform, bookingText) {
  const isMobile = window.matchMedia("(pointer: coarse)").matches ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile || !platform) return;

  const encodedText = encodeURIComponent(bookingText);

  if (platform === "Zalo") {
    window.location.href = `https://zalo.me/84988616168?text=${encodedText}`;
  } else if (platform === "WhatsApp") {
    window.location.href = `https://wa.me/84988616168?text=${encodedText}`;
  } else if (platform === "Telegram") {
    window.location.href = `https://t.me/share/url?text=${encodedText}`;
  } else if (platform === "WeChat") {
    window.location.href = "weixin://dl/chat";
  } else if (platform === "KakaoTalk") {
    window.location.href = "kakaotalk://";
  }
}

const submitCooldownKey = "befree-booking-submit-until";
const submitMessageKey = "befree-booking-submit-message";
const submitMessageTypeKey = "befree-booking-submit-message-type";
const submitCooldownMs = 60 * 1000;
let submitCooldownTimer;

function getActiveTranslations() {
  const activeCode = languageMeta[localStorage.getItem("befree-language")] ? localStorage.getItem("befree-language") : "en";
  return translations[activeCode] || translations.en;
}

function resetSubmitCooldown() {
  window.clearInterval(submitCooldownTimer);
  localStorage.removeItem(submitCooldownKey);
  localStorage.removeItem(submitMessageKey);
  localStorage.removeItem(submitMessageTypeKey);
  const submitButton = document.querySelector("#bookingForm button[type='submit']");
  const data = getActiveTranslations();
  if (submitButton) {
    submitButton.disabled = false;
    submitButton.textContent = data.form_submit || "Send booking request";
  }
  const message = document.getElementById("formMessage");
  if (message) {
    message.textContent = "";
    message.classList.remove("form-message--success", "form-message--error");
  }
}

function startSubmitCooldown(showSuccessMessage = false, preserveExisting = false) {
  const submitButton = document.querySelector("#bookingForm button[type='submit']");
  const message = document.getElementById("formMessage");
  const storedUntil = Number(localStorage.getItem(submitCooldownKey)) || 0;
  const cooldownUntil = preserveExisting && storedUntil > Date.now()
    ? storedUntil
    : Date.now() + submitCooldownMs;
  localStorage.setItem(submitCooldownKey, String(cooldownUntil));
  window.clearInterval(submitCooldownTimer);

  if (submitButton) submitButton.disabled = true;

  if (showSuccessMessage && message) {
    const data = getActiveTranslations();
    message.textContent = data.form_success || "Your booking request was sent successfully.";
    message.classList.remove("form-message--error");
    message.classList.add("form-message--success");
  }

  const updateCooldown = () => {
    const remainingMs = Number(localStorage.getItem(submitCooldownKey)) - Date.now();
    if (remainingMs <= 0) {
      resetSubmitCooldown();
      return;
    }

    const remainingSeconds = Math.ceil(remainingMs / 1000);
    if (submitButton) {
      const data = getActiveTranslations();
      submitButton.textContent = (data.form_wait || "Please wait {seconds}s").replace("{seconds}", remainingSeconds);
    }
  };

  updateCooldown();
  submitCooldownTimer = window.setInterval(updateCooldown, 1000);
}

const existingCooldownUntil = Number(localStorage.getItem(submitCooldownKey)) || 0;
if (existingCooldownUntil > Date.now()) {
  startSubmitCooldown(false, true);
  const storedMessage = localStorage.getItem(submitMessageKey);
  const storedMessageType = localStorage.getItem(submitMessageTypeKey);
  const message = document.getElementById("formMessage");
  if (storedMessage && message) {
    message.textContent = storedMessage;
    message.classList.remove("form-message--success", "form-message--error");
    message.classList.add(storedMessageType === "error" ? "form-message--error" : "form-message--success");
  }
}

async function submitGoogleBookingForm(name, phone, rentalDate, days) {
  const [year, month, day] = rentalDate.split("-");
  const formData = new URLSearchParams({
    "entry.188790847": name,
    "entry.1701305125": phone,
    "entry.867406678_day": String(Number(day)),
    "entry.867406678_month": String(Number(month)),
    "entry.867406678_year": year,
    "entry.1087281785": String(days),
    "submit": "Submit"
  });

  await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSd_cFLKCVrh-_kh54XBN_byXzEozohn_n1vzNupUe_wtXiE1g/formResponse",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: formData.toString()
    }
  );
}

document.getElementById("bookingForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById("formMessage");
  phoneInput.setCustomValidity("");
  nameInput.setCustomValidity("");

  if (nameInput.value.trim().length < 2) {
    nameInput.setCustomValidity("Please enter at least 2 characters.");
  }

  const phoneDigits = phoneInput.value.replace(/\D/g, "");
  const validPhoneCharacters = /^[+\d\s().-]+$/.test(phoneInput.value);
  if (!validPhoneCharacters || phoneDigits.length < 8 || phoneDigits.length > 15) {
    phoneInput.setCustomValidity("Please enter a valid phone number.");
  }

  if (!form.checkValidity()) {
    form.reportValidity();
    phoneInput.setCustomValidity("");
    nameInput.setCustomValidity("");
    return;
  }

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const rentalDate = dateInput.value;
  const days = Math.max(1, Number.parseInt(daysInput.value, 10) || 1);
  const chatPlatform = form.querySelector('input[name="chatPlatform"]:checked')?.value || "";
  const rental = calculateRental(days);
  const total = rental.total.toLocaleString("vi-VN");
  const bookingText = `BeFree booking request\nName: ${name}\nPhone: ${phone}\nPreferred chat platform: ${chatPlatform}\nDate: ${rentalDate}\nDays: ${rental.enteredDays}\nEstimated total: ${total} VND`;
  const text = encodeURIComponent(bookingText);
  message.textContent = "";
  message.classList.remove("form-message--success", "form-message--error");
  const activeCode = languageMeta[localStorage.getItem("befree-language")] ? localStorage.getItem("befree-language") : "en";
  const activeTranslations = translations[activeCode] || translations.en;
  startSubmitCooldown(false);

  try {
    const response = await fetch("https://befreerentalbooking.hunganhphan.workers.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        chatPlatform,
        date: rentalDate,
        days: rental.enteredDays,
        total: `${total} VND`
      })
    });

    if (!response.ok) {
      throw new Error(`Worker returned ${response.status}`);
    }

    message.textContent = activeTranslations.form_success || "Your booking request was sent successfully.";
    message.classList.remove("form-message--error");
    message.classList.add("form-message--success");
    localStorage.setItem(submitMessageKey, message.textContent);
    localStorage.setItem(submitMessageTypeKey, "success");
    submitGoogleBookingForm(name, phone, rentalDate, rental.enteredDays).catch(() => {
      console.error("Google Booking Form submission failed.");
    });
    openMobileChatWithBooking(chatPlatform, bookingText);
  } catch (error) {
    message.textContent = activeTranslations.form_error || "Could not send the request. Please try WhatsApp.";
    message.classList.remove("form-message--success");
    message.classList.add("form-message--error");
    localStorage.setItem(submitMessageKey, message.textContent);
    localStorage.setItem(submitMessageTypeKey, "error");
    window.open(`https://wa.me/84988616168?text=${text}`, "_blank", "noopener");
  }
});

const floatingCall = document.getElementById("floatingCall");
const floatingMenu = document.getElementById("floatingMenu");

floatingCall.addEventListener("click", () => {
  const open = floatingMenu.classList.toggle("open");
  floatingCall.setAttribute("aria-expanded", String(open));
  floatingMenu.setAttribute("aria-hidden", String(!open));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".floating-contact")) {
    floatingMenu.classList.remove("open");
    floatingCall.setAttribute("aria-expanded", "false");
    floatingMenu.setAttribute("aria-hidden", "true");
  }
});
