import { useState } from 'react'
import {
  FolderTree,
  Search,
  MessageSquareCode,
  Users,
  BrainCircuit,
  ShieldAlert,
  Edit3,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  FileText,
  ArrowLeft
} from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  iconName: string
  process: string
  product: string
}

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'summary'>('home')
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  
  // Interactive State for Editing Projects in the Browser
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Thao tác cơ bản với tệp tin và thư mục",
      description: "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.",
      iconName: "FolderTree",
      process: "1. Thiết lập cấu trúc thư mục khoa học:\n   - /Velorah-Portfolio (Gốc)\n     ├── /src (Mã nguồn)\n     ├── /public (Tài nguyên công cộng)\n     └── /assets (Hình ảnh, video minh họa)\n2. Áp dụng quy tắc đặt tên tệp:\n   - Dạng kebab-case mang tính mô tả rõ ràng (ví dụ: folder-structure-screenshot.png).",
      product: "📂 Cấu trúc thư mục thực tế đã thiết lập được thể hiện chi tiết qua hình ảnh báo cáo cấu trúc dưới đây."
    },
    {
      id: 2,
      title: "Tìm kiếm và đánh giá thông tin học thuật",
      description: "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.",
      iconName: "Search",
      process: "Xem chi tiết quy trình tìm kiếm nâng cao và đánh giá tài liệu bằng phương pháp học thuật được kết xuất từ file báo cáo học thuật đính kèm.",
      product: "Xem bảng tổng hợp 10 nguồn thông tin, nhận xét ưu thế và danh mục tài liệu Harvard Style chi tiết trên trang báo cáo riêng của bài 2."
    },
    {
      id: 3,
      title: "Viết Prompt hiệu quả cho các tác vụ học tập",
      description: "Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.",
      iconName: "MessageSquareCode",
      process: "1. Prompt ban đầu:\n   \"Giải thích cho tôi về Vật lý kỹ thuật.\"\n2. Prompt cải tiến (Cơ chế phân vai & ngữ cảnh):\n   \"Bạn là chuyên gia Vật lý kỹ thuật. Hãy giải thích những hướng ứng dụng cốt lõi của ngành này trong phát triển Trí tuệ nhân tạo dưới dạng 3 luận điểm súc tích.\"",
      product: "📝 So sánh kết quả:\n- Prompt đầu tiên: Kết quả chung chung, chưa đi vào trọng tâm.\n- Prompt cải tiến: Nội dung trả về có cấu trúc rõ ràng, tập trung trực tiếp vào mối quan hệ giữa Vật lý và AI."
    },
    {
      id: 4,
      title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
      description: "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.",
      iconName: "Users",
      process: "1. Khởi tạo cấu trúc thư mục dùng chung trên Google Drive để phân chia và quản lý tài liệu.\n2. Thiết lập bảng quản lý công việc Kanban trên Trello với các trạng thái To Do, Doing, Done để theo dõi tiến độ.\n3. Tổ chức họp trực tuyến định kỳ trên Zoom để trao đổi ý tưởng và thống nhất nội dung.\n4. Soạn thảo kịch bản và báo cáo đồng thời theo thời gian thực trên Google Docs.",
      product: "📂 Hệ thống thư mục Google Drive khoa học\n📋 Bảng công việc Trello phân công nhiệm vụ và hạn hoàn thành\n💬 Biên bản họp Zoom và tài liệu soạn thảo nhóm trên Google Docs"
    },
    {
      id: 5,
      title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      description: "Trưng bày sản phẩm nội dung số hoàn thiện (hình ảnh, video hoặc bài viết) được hỗ trợ bởi AI.",
      iconName: "BrainCircuit",
      process: "1. Lên kịch bản nội dung chiến dịch bằng Google Gemini & ChatGPT.\n2. Sáng tạo hình ảnh minh họa bằng Midjourney/DALL-E 3.\n3. Thiết kế Infographic số liệu bằng Canva AI.\n4. Biên tập, kiểm chứng thông tin và tùy chỉnh thiết kế thủ công.",
      product: "📝 Bài viết Blog chuyên sâu 'Giải cứu Đại dương khỏi Rác thải nhựa'\n🎨 Ảnh minh họa chất lượng cao chú rùa biển bơi giữa rác thải\n📊 Infographic dọc tóm tắt số liệu ô nhiễm nhựa tại Đông Nam Á"
    },
    {
      id: 6,
      title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      description: "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện.",
      iconName: "ShieldAlert",
      process: "1. Nghiên cứu chính sách học thuật và quy định sử dụng AI trong các trường đại học.\n2. Thực hành xây dựng bài thuyết trình 'Tác động của AI đối với giáo dục hiện đại' bằng prompt định hướng.\n3. Đánh giá đạo đức học thuật: ranh giới đạo văn và quyền sở hữu trí tuệ.\n4. Đúc kết bộ nguyên tắc ứng xử cá nhân và thiết kế Infographic chỉ dẫn học đường.",
      product: "🛡️ Bộ nguyên tắc ứng xử 7 điểm khi sử dụng AI trong học tập\n📊 Infographic tương tác 'Sử dụng AI có trách nhiệm trong học thuật'\n📝 Báo cáo phân tích ranh giới đạo đức và tác động nhận thức của AI"
    }
  ])

  // State for Editing inside separate page view
        const [viewMode, setViewMode] = useState<'text' | 'images'>('text')
  const [currentStep, setCurrentStep] = useState(0)

  // States for Project 3
  const [activeTab3, setActiveTab3] = useState<'tasks' | 'tryouts' | 'analysis'>('tasks')
  const [activeTask3, setActiveTask3] = useState<number>(0)
  const [activeLevel3, setActiveLevel3] = useState<number>(2)
  const [activeImage3, setActiveImage3] = useState<number>(0)
  const [copiedText, setCopiedText] = useState(false)

  // States for Project 4
  const [activeTab4, setActiveTab4] = useState<'overview' | 'tools' | 'reflection' | 'evidence'>('overview')
  const [activeImage4, setActiveImage4] = useState<number>(0)

  // States for Project 5
  const [activeTab5, setActiveTab5] = useState<'overview' | 'production' | 'analysis' | 'ethics' | 'evidence'>('overview')
  const [activeImage5, setActiveImage5] = useState<number>(0)

  // States for Project 6
  const [activeTab6, setActiveTab6] = useState<'policies' | 'task' | 'ethics' | 'principles' | 'infographic'>('policies')

        const stepFiles = [
    "step1.png",
    "step2.png",
    "step3.png",
    "step4.png",
    "step5.png",
    "step6.png",
    "step7.png",
    "step8.png",
    "step9.png",
    "step9.1.png",
    "step10.png",
    "step11.png",
    "step12.png"
  ]

  const steps = [
    { text: "Bước 1: Mở File Explorer", desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ." },
    { text: "Bước 2: Truy cập ổ đĩa/thư mục", desc: "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents." },
    { text: "Bước 3: Tạo thư mục mới", desc: "Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_NguyenDoanMinhHieu. Nhấn Enter." },
    { text: "Bước 4: Vào thư mục vừa tạo", desc: "Nhấp đúp vào thư mục ThucHanh_NguyenDoanMinhHieu." },
    { text: "Bước 5: Tạo tệp tin văn bản", desc: "Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter." },
    { text: "Bước 6: Đổi tên tệp tin", desc: "Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter." },
    { text: "Bước 7: Tạo thư mục con", desc: "Trong thư mục ThucHanh_NguyenDoanMinhHieu, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu." },
    { text: "Bước 8: Sao chép tệp tin (Copy & Paste)", desc: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy (hoặc nhấn Ctrl + C). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong -> chọn Paste (hoặc nhấn Ctrl + V). Bây giờ bạn có một bản sao của tệp trong thư mục TaiLieu." },
    { text: "Bước 9: Tạo tệp DiChuyen.txt", desc: "Quay lại thư mục ThucHanh_NguyenDoanMinhHieu. Tạo một tệp mới tên là DiChuyen.txt." },
    { text: "Bước 10: Di chuyển tệp tin (Cut & Paste)", desc: "Nhấp chuột phải vào tệp DiChuyen.txt -> chọn Cut (hoặc chọn tệp rồi nhấn Ctrl + X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống -> chọn Paste (hoặc nhấn Ctrl + V). Tệp gốc đã biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới." },
    { text: "Bước 11: Xóa tệp tin", desc: "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin)." },
    { text: "Bước 12: Xóa vĩnh viễn", desc: "Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác." },
    { text: "Bước 13: Khôi phục từ Thùng rác (Tùy chọn)", desc: "Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore. Tệp sẽ quay trở lại vị trí ban đầu." }
  ]

  const getIcon = (iconName: string) => {
    const classes = "w-5 h-5 text-muted-foreground"
    switch (iconName) {
      case 'FolderTree':
        return <FolderTree className={classes} />
      case 'Search':
        return <Search className={classes} />
      case 'MessageSquareCode':
        return <MessageSquareCode className={classes} />
      case 'Users':
        return <Users className={classes} />
      case 'BrainCircuit':
        return <BrainCircuit className={classes} />
      case 'ShieldAlert':
        return <ShieldAlert className={classes} />
      default:
        return <FolderTree className={classes} />
    }
  }

  const handleTabChange = (tab: 'home' | 'projects' | 'summary') => {
    setActiveTab(tab)
    setSelectedProjectId(null) // Reset detail view when tab changes
      }

  const selectedProject = projects.find(p => p.id === selectedProjectId)

  const academicSources = [
    {
      stt: 1,
      citation: "Liu et al. (2021), Two-dimensional materials for next-generation transistors. Tạp chí Nature Nanotechnology.",
      type: "Bài báo khoa học (ISI)",
      method: "Tổng quan lý thuyết và thực nghiệm (Review paper).",
      positives: "Phân tích toàn diện cơ chế vật lý lý tưởng của MoS2 ở quy mô nguyên tử. Trích dẫn cực cao (>500).",
      negatives: "Mang tính tổng quan rộng, chưa đi sâu vào giải pháp lỗi kỹ thuật cụ thể tại nhà máy.",
      reliability: "Tuyệt đối tin cậy. Xếp hạng: Mức 4 (Xuất sắc)"
    },
    {
      stt: 2,
      citation: "Desai et al. (2023), Sub-5nm MoS2 Transistor Performance. Tạp chí Science.",
      type: "Bài báo khoa học (ISI)",
      method: "Thực nghiệm chế tạo phòng thí nghiệm kết hợp đo đạc thông số dòng điện.",
      positives: "Chứng minh thực tế MoS2 có thể vượt qua giới hạn dòng rò của Silicon ở tiến trình 1 nm.",
      negatives: "Chi phí chế tạo thực nghiệm quá cao, môi trường phòng sạch siêu tiêu chuẩn, khó sao chép đại trà.",
      reliability: "Tuyệt đối tin cậy. Xếp hạng: Mức 4 (Xuất sắc)"
    },
    {
      stt: 3,
      citation: "Radisavljevic & Kis (2022), Mobility engineering in single-layer MoS2. Tạp chí Nature Materials.",
      type: "Bài báo khoa học (ISI)",
      method: "Mô phỏng vật lý lượng tử lượng mô tả độ linh động hạt tải điện (Mobility).",
      positives: "Giải quyết chuyên sâu bài toán cải thiện độ linh động của điện tử trong lớp đơn MoS2.",
      negatives: "Sử dụng nhiều giả định toán lý lý tưởng, có sai số nhất định so với linh kiện thực tế.",
      reliability: "Rất tin cậy. Xếp hạng: Mức 4 (Xuất sắc)"
    },
    {
      stt: 4,
      citation: "Schwierz et al. (2024), Two-Dimensional Electronics. Nhà xuất bản Wiley-VCH.",
      type: "Sách chuyên khảo",
      method: "Hệ thống hóa toàn bộ lý thuyết vật lý chất rắn và kỹ thuật linh kiện 2D.",
      positives: "Cấu trúc kiến thức logic, nền tảng lý thuyết vô cùng chặt chẽ, phù hợp làm giáo trình chuẩn.",
      negatives: "Tốc độ cập nhật chậm hơn các bài báo báo cáo hội nghị chuyên ngành (vừa xuất bản năm 2024).",
      reliability: "Rất tin cậy. Xếp hạng: Mức 3 (Tốt)"
    },
    {
      stt: 5,
      citation: "IMEC Research Institute (2025), Roadmap for 2D Materials in CMOS integration. Báo cáo Kỹ thuật IMEC.",
      type: "Viện nghiên cứu (Nguồn mở)",
      method: "Nghiên cứu ứng dụng và xây dựng lộ trình công nghệ (Roadmap).",
      positives: "Cung cấp cái nhìn thực tế về việc tích hợp MoS2 vào dây chuyền sản xuất chip Silicon hiện tại.",
      negatives: "Ít tập trung vào các công thức tính toán cơ học lượng tử thuần túy.",
      reliability: "Rất tin cậy. Xếp hạng: Mức 4 (Xuất sắc)"
    },
    {
      stt: 6,
      citation: "Kim et al. (2023), Contact resistance reduction techniques in MoS2 FETs. Tạp chí IEEE Transactions on Electron Devices.",
      type: "Bài báo khoa học (Scopus)",
      method: "Mô phỏng số thông qua phần mềm TCAD kết hợp thực nghiệm cơ bản.",
      positives: "Tập trung xử lý điểm nghẽn lớn nhất: Điện trở tiếp xúc giữa kim loại và bán dẫn 2D.",
      negatives: "Phạm vi hẹp, chỉ tập trung vào cấu trúc lớp tiếp xúc (Contact layer).",
      reliability: "Rất tin cậy. Xếp hạng: Mức 3 (Tốt)"
    },
    {
      stt: 7,
      citation: "Wang, X. (2022), Advanced Semiconductor Devices. Nhà xuất bản CRC Press.",
      type: "Sách chuyên khảo",
      method: "Phân tích kỹ thuật các thế hệ linh kiện bán dẫn tiên tiến.",
      positives: "Cung cấp bức tranh so sánh đối chiếu rõ nét giữa cấu trúc FinFET Silicon và FET vật liệu 2D.",
      negatives: "Phần viết riêng về MoS2 chưa cập nhật được các đột phá kỹ thuật từ năm 2024–2026.",
      reliability: "Tin cậy. Xếp hạng: Mức 3 (Tốt)"
    },
    {
      stt: 8,
      citation: "TSMC R&D Team (2025), 1nm node integration challenges with 2D semiconductors. Kỷ yếu hội thảo IEDM.",
      type: "Hội thảo quốc tế",
      method: "Thực nghiệm công nghiệp trên các tấm Wafer kích thước lớn (300 mm).",
      positives: "Tính thực tiễn công nghệ cao nhất toàn cầu, chứng minh tiềm năng thương mại hóa thực tế của hãng chip lớn nhất thế giới.",
      negatives: "Thông tin mang tính bảo mật thương mại nên một số thông số kỹ thuật bị ẩn đi.",
      reliability: "Rất tin cậy. Xếp hạng: Mức 4 (Xuất sắc)"
    },
    {
      stt: 9,
      citation: "Das et al. (2023), Environmental degradation of MoS2 monolayers. Tạp chí ACS Nano.",
      type: "Bài báo khoa học (ISI)",
      method: "Thực nghiệm hóa lý, phân tích quang phổ độ bền vật liệu dưới môi trường.",
      positives: "Chỉ ra nhược điểm bị oxy hóa và suy giảm chất lượng của MoS2 khi hoạt động ngoài không khí.",
      negatives: "Chỉ tập trung vào khía cạnh hóa lý vật liệu, chưa đi sâu vào kiểm tra trạng thái hoạt động điện.",
      reliability: "Rất tin cậy. Xếp hạng: Mức 3 (Tốt)"
    },
    {
      stt: 10,
      citation: "Semiconductor Research Corporation (2026), Decadal Plan for Semiconductors. Báo cáo chiến lược ngành.",
      type: "Hiệp hội (Nguồn mở)",
      method: "Thống kê phân tích dữ liệu vĩ mô và dự báo xu hướng đầu tư.",
      positives: "Cho thấy dòng tiền và định hướng nghiên cứu ưu tiên của các chính phủ đối với ngành bán dẫn 2D.",
      negatives: "Không chứa dữ liệu kỹ thuật vật lý chi tiết.",
      reliability: "Tin cậy. Xếp hạng: Mức 3 (Tốt)"
    }
  ]

  const tasks3Data = [
    {
      title: "Tác vụ 1: Tóm tắt tài liệu học thuật",
      target: "Tóm tắt một bài đọc / tài liệu học thuật",
      objective: "Chuyển đổi khối lượng kiến thức đồ sộ, phức tạp từ các bài báo khoa học hoặc giáo trình thành một văn bản ngắn gọn nhưng không làm mất đi các luận điểm cốt lõi, phương pháp luận và kết quả nghiên cứu.",
      challenge: "Sinh viên dễ bị \"ngợp\" thông tin, khó phân biệt giữa ý chính và chi tiết phụ họa. Nếu tóm tắt thủ công quá máy móc, người học chỉ đang \"sao chép\" thay vì cô đọng kiến thức.",
      nature: "Đòi hỏi LLM phải có tư duy phân tích cấu trúc văn bản, nhận diện hệ thống luận điểm (arguments) và trích xuất dữ liệu cốt lõi mà không bị \"bịa đặt thông tin\" (hallucination).",
      levels: [
        {
          name: "Cơ bản (Mức 1-2)",
          prompt: "Tóm tắt bài đọc sau đây giúp tôi: [Dán văn bản vào đây]",
          analysis: "AI cho ra một đoạn văn liền mạch, chung chung. Nó có xu hướng cắt gọt cơ học (lấy các câu đầu đoạn) dẫn đến việc bỏ sót cấu trúc logic của bài nghiên cứu. Rất khó để ôn tập nhanh.",
          images: ["image1.png"]
        },
        {
          name: "Cải tiến (Mức 3)",
          prompt: "Hãy tóm tắt văn bản học thuật dưới đây dưới dạng các ý chính (bullet points). Yêu cầu giữ lại các thuật ngữ chuyên ngành quan trọng, nêu rõ phương pháp nghiên cứu và kết luận cuối cùng của tác giả. Độ dài không quá 300 từ. Văn bản: [Dán văn bản vào đây]",
          analysis: "Đầu ra rõ ràng hơn nhờ các dấu đầu dòng. Đã lọc được kết luận, tuy nhiên phần phương pháp luận vẫn bị mờ nhạt và độ dài đôi khi vượt quá kiểm soát do AI chưa được định hình phong cách hành văn chuyên gia.",
          images: ["image2.png"]
        },
        {
          name: "Nâng cao (Mức 4)",
          prompt: "Bạn là một chuyên gia phân tích dữ liệu và là nghiên cứu sinh xuất sắc. Nhiệm vụ của bạn là đọc và lập bản tóm tắt học thuật chuyên sâu cho tài liệu dưới đây.\n\nHãy thực hiện suy nghĩ từng bước (Chain-of-Thought) trước khi xuất kết quả:\nBước 1: Xác định câu hỏi nghiên cứu hoặc luận đề trung tâm của tài liệu.\nBước 2: Trích xuất các phương pháp luận hoặc lập luận chính được sử dụng.\nBước 3: Xác định kết quả hoặc đóng góp cốt lõi.\n\nĐịnh dạng đầu ra nghiêm ngặt theo cấu trúc sau:\nBối cảnh & Luận đề: (1-2 câu)\nPhương pháp luận/Lập luận chủ chốt: (Dạng danh sách)\nKết luận & Ý nghĩa thực tiễn: (Khái quát ngắn gọn)\nThuật ngữ chuyên ngành cốt lõi: (Liệt kê kèm giải thích ngắn nếu có)\n\nTài liệu: [Dán văn bản vào đây]",
          analysis: "Xuất sắc nhất. Nhờ có bước suy nghĩ (CoT), AI không bị nhầm lẫn giữa dữ liệu thô và luận điểm. Bảng cấu trúc đầu ra cực kỳ sạch sẽ, phân định rõ ràng giữa \"Phương pháp\" và \"Kết luận\", giúp người học nắm bắt toàn bộ tư duy của tác giả chỉ trong 30 giây lướt mắt.",
          images: ["image3.png"]
        }
      ]
    },
    {
      title: "Tác vụ 2: Giải thích khái niệm phức tạp",
      target: "Giải thích một khái niệm phức tạp",
      objective: "Đơn giản hóa các lý thuyết mang tính trừu tượng cao (ví dụ: Cơ học lượng tử, Thuật toán học máy, Định luật kinh tế) thành ngôn từ dễ hiểu, trực quan, phù hợp với trình độ hiện tại của người học.",
      challenge: "Việc ghi nhớ vẹt các định nghĩa khô khan không tạo ra tư duy trực quan. Người học cần sự liên hệ thực tế hoặc các phép ẩn dụ (metaphor) để thực sự \"hiểu bản chất\".",
      nature: "LLM cần đóng vai trò là một nhà sư phạm lỗi lạc, biết tinh chỉnh ngôn ngữ theo đối tượng tiếp nhận và có khả năng sáng tạo ra các ví dụ thực tiễn chính xác.",
      levels: [
        {
          name: "Cơ bản (Mức 1-2)",
          prompt: "Giải thích khái niệm [Tên khái niệm, ví dụ: Lạm phát phi mã / Thuật toán Backpropagation] là gì?",
          analysis: "AI trả về định nghĩa mang tính từ điển (Wikipedia). Sử dụng quá nhiều thuật ngữ chuyên ngành chồng chéo lên nhau. Người học phải tra cứu thêm các thuật ngữ phụ thì mới hiểu được thuật ngữ chính.",
          images: ["image4.png", "image5.png"]
        },
        {
          name: "Cải tiến (Mức 3)",
          prompt: "Hãy giải thích khái niệm [Tên khái niệm] một cách dễ hiểu cho một sinh viên năm nhất. Hãy đưa ra định nghĩa chính thức và một ví dụ thực tế để minh họa.",
          analysis: "Khá hơn khi ngôn ngữ đã được hạ tông giọng. Tuy nhiên, ví dụ đưa ra mang tính rập khuôn, thiếu sự liên tưởng mạnh mẽ để tạo ra cú hích tư duy (\"Ah-ha moment\").",
          images: ["image6.png", "image7.png", "image8.png"]
        },
        {
          name: "Nâng cao (Mức 4)",
          prompt: "Bạn là một giáo sư đại học có tài năng sư phạm xuất chúng, nổi tiếng với khả năng biến những điều cực kỳ phức tạp thành những bài giảng khắc sâu vào tâm trí học sinh. Hãy giải thích khái niệm '[Tên khái niệm]' cho một học sinh 15 tuổi chưa có nền tảng về ngành này.\n\nQuy trình giải thích cần tuân theo kỹ thuật Feynman:\n- Định nghĩa bằng ngôn ngữ bình dân: Tuyệt đối không dùng biệt ngữ chuyên ngành ở phần này.\n- Phép ẩn dụ (Metaphor): Hãy kiến tạo một câu chuyện chuyển hóa hoặc một hình ảnh ẩn dụ quen thuộc trong đời sống để minh họa cho cơ chế hoạt động của khái niệm này.\n- Ứng dụng thực tế: Tại sao khái niệm này lại quan trọng trong thế giới thực?\n- Cảnh báo sai lầm: Một hiểu lầm phổ biến nhất mà mọi người thường mắc phải khi nghĩ về khái niệm này là gì?",
          analysis: "Tạo ra bước đột phá. Việc ép AI sử dụng \"Phép ẩn dụ\" và \"Kỹ thuật Feynman\" buộc mô hình phải ánh xạ bản chất toán học/lý thuyết sang một mô hình đời sống (ví dụ: giải thích mạng thần kinh nhân tạo thông qua cách một đứa trẻ học phân biệt quả táo và quả cam). Phần \"Cảnh báo sai lầm\" giúp người học định hình tư duy phản biện, tránh bẫy kiến thức.",
          images: ["image9.png", "image10.png", "image11.png", "image12.png", "image13.png"]
        }
      ]
    },
    {
      title: "Tác vụ 3: Tạo bộ câu hỏi ôn tập",
      target: "Tạo bộ câu hỏi ôn tập cho một chủ đề",
      objective: "Tự động hóa việc thiết kế các công cụ tự kiểm tra (flashcards, câu hỏi trắc nghiệm, câu hỏi tự luận) dựa trên một vùng kiến thức để kích hoạt quá trình chủ động gợi nhớ (Active Recall).",
      challenge: "Người học thường có xu hướng đặt các câu hỏi nhận biết bề nổi (Học vẹt) thay vì các câu hỏi vận dụng cao hoặc phân tích để kích thích tư duy phản biện.",
      nature: "LLM cần hiểu thang đo tư duy (như Bloom's Taxonomy) để thiết kế các câu hỏi trải dài từ mức độ nhận biết đến đánh giá/vận dụng, đi kèm đáp án giải thích logic.",
      levels: [
        {
          name: "Cơ bản (Mức 1-2)",
          prompt: "Tạo câu hỏi trắc nghiệm ôn tập về chủ đề: [Tên chủ đề, ví dụ: Hệ tuần hoàn ở người]",
          analysis: "AI tạo ra các câu hỏi thuần hỏi về định nghĩa (Ví dụ: 'Cơ quan nào sau đây...'). Người học chỉ cần nhớ vẹt là trả lời được, không giúp ích cho việc thi cử chuyên sâu.",
          images: ["image14.png", "image15.png", "image16.png"]
        },
        {
          name: "Cải tiến (Mức 3)",
          prompt: "Tạo 5 câu hỏi trắc nghiệm và 2 câu hỏi tự luận về chủ đề [Tên chủ đề]. Hãy cung cấp đáp án ở phía dưới.",
          analysis: "Số lượng câu hỏi rõ ràng, có đáp án đúng nhưng phần giải thích cực kỳ sơ sài (chỉ nói 'Đáp án A đúng vì lý thuyết ghi thế').",
          images: ["image17.png", "image18.png", "image19.png", "image20.png"]
        },
        {
          name: "Nâng cao (Mức 4)",
          prompt: "Bạn là một chuyên gia khảo thí và xây dựng chương trình đào tạo quốc tế. Nhiệm vụ của bạn là tạo ra một bộ công cụ đánh giá năng lực gồm 3 câu hỏi trắc nghiệm cho chủ đề: [Tên chủ đề].\n\nThiết kế câu hỏi phải dựa trên Thang đo tư duy Bloom:\n- Câu 1: Mức độ Hiểu (Hiểu rõ cơ chế).\n- Câu 2: Mức độ Vận dụng (Áp dụng vào một tình huống/vấn đề cụ thể).\n- Câu 3: Mức độ Phân tích/Đánh giá (So sánh hoặc tìm lỗi sai).\n\nYêu cầu cấu trúc đầu ra cho mỗi câu hỏi:\nCâu hỏi: ...\nCác phương án lựa chọn: A, B, C, D\nĐáp án đúng: ...\nGiải thích chi tiết: Tại sao đáp án đó đúng VÀ tại sao các đáp án còn lại (các phương án gây nhiễu) lại sai.\n\nVí dụ mẫu về cách giải thích phương án gây nhiễu để bạn noi theo:\n[Nếu chọn A: Sai vì A là đặc điểm của hệ vô sắc, không phải hệ tuần hoàn máu. Nếu chọn B: Đúng vì...]\n\nHãy bắt đầu tạo bộ câu hỏi.",
          analysis: "Đạt chất lượng đề thi chuẩn hóa. Nhờ kỹ thuật Few-shot (đưa cấu trúc mẫu) và ép phân tích 'phương pháp gây nhiễu', người học không chỉ biết tại sao mình đúng mà còn học được từ những lỗi sai phổ biến. Các câu hỏi vận dụng buộc người học phải tư duy logic thay vì recall thông tin đơn thuần.",
          images: ["image21.png", "image22.png", "image23.png"]
        }
      ]
    }
  ];

  const promptComparisonData = [
    {
      criteria: "Độ chính xác của ngữ cảnh",
      basic: "Thấp, dễ bị lan man hoặc lạc đề do thiếu rào cản.",
      improved: "Trung bình, bám sát được chủ đề chính được yêu cầu.",
      advanced: "Rất cao, ép AI hành văn đúng vai trò chuyên gia, giảm thiểu tối đa hiện tượng \"bịa thông tin\"."
    },
    {
      criteria: "Cấu trúc dữ liệu đầu ra",
      basic: "Hỗn độn, thường là các khối văn bản dài (Wall of text), khó theo dõi.",
      improved: "Khá tốt, có sử dụng danh sách liệt kê (bullet points) cơ bản.",
      advanced: "Hoàn hảo, tuân thủ nghiêm ngặt cấu trúc phân định sẵn, tối ưu cho việc ghi nhớ thị giác."
    },
    {
      criteria: "Độ sâu tư duy kích hoạt",
      basic: "Chỉ dừng ở mức Nhận biết bề nổi (Học vẹt).",
      improved: "Đạt mức Hiểu cơ bản.",
      advanced: "Kích hoạt tư duy Vận dụng, Phân tích sâu và Tư duy phản biện (Critical Thinking)."
    },
    {
      criteria: "Tính cá nhân hóa học tập",
      basic: "Không có.",
      improved: "Có điều chỉnh đối tượng ở mức phổ thông.",
      advanced: "Rất cao (Tự cấu trúc theo Feynman, Bloom, và các kịch bản thực tế)."
    }
  ];

  const timeline4Data = [
    { week: "Tuần 1", task: "Tạo thư mục Google Drive dùng chung và phân chia nhiệm vụ ban đầu." },
    { week: "Tuần 1", task: "Họp nhóm trên Zoom để thảo luận và thống nhất chủ đề báo cáo nhóm." },
    { week: "Tuần 1", task: "Khởi tạo tài liệu Google Docs để các thành viên cùng soạn thảo nội dung thô." },
    { week: "Tuần 2", task: "Tìm kiếm tài liệu học thuật và hình ảnh minh họa về ngành vi mạch bán dẫn." },
    { week: "Tuần 2", task: "Thiết kế slide thuyết trình trên Canva và chỉnh sửa, hoàn thiện nội dung báo cáo." },
    { week: "Tuần 2", task: "Cập nhật, theo dõi và kiểm tra tiến độ thực hiện công việc thông qua Trello." },
    { week: "Tuần 2", task: "Hoàn thiện sản phẩm nhóm cuối cùng và cùng nhau luyện tập thuyết trình." }
  ];

  const tools4Data = [
    {
      name: "Google Drive",
      purpose: "Lưu trữ và chia sẻ tài nguyên chính",
      usage: "Khởi tạo cấu trúc thư mục gồm: Ảnh về ngành bán dẫn, Nội dung thô, Nội dung chỉnh sửa, Canva & Slide trình bày.",
      positives: "Giao diện thân thiện, đồng bộ nhanh chóng, phân quyền truy cập chi tiết và hỗ trợ đa thiết bị.",
      negatives: "Dung lượng miễn phí giới hạn (15GB), hoạt động phụ thuộc hoàn toàn vào kết nối mạng."
    },
    {
      name: "Google Docs",
      purpose: "Soạn thảo kịch bản & nội dung báo cáo",
      usage: "Mọi thành viên đồng biên tập kịch bản thuyết trình, đóng góp ý kiến thông qua tính năng Comment và theo dõi lịch sử chỉnh sửa.",
      positives: "Khả năng cộng tác thời gian thực xuất sắc, tự động lưu trữ tức thời, quản lý phiên bản rõ ràng.",
      negatives: "Đôi khi gặp lỗi định dạng khi xuất file sang định dạng Word (.docx), dễ bị trùng lặp khi nhiều người sửa cùng dòng."
    },
    {
      name: "Zoom",
      purpose: "Họp trực tuyến & thảo luận nhóm",
      usage: "Tổ chức các cuộc họp phân chia công việc, báo cáo tiến độ tuần, duyệt slide và tập duyệt thuyết trình trước buổi học.",
      positives: "Đường truyền âm thanh/hình ảnh chất lượng cao, tính năng chia sẻ màn hình linh hoạt phục vụ làm việc nhóm từ xa.",
      negatives: "Yêu cầu băng thông mạng ổn định, phiên bản miễn phí bị giới hạn thời gian (40 phút/cuộc họp)."
    },
    {
      name: "Trello",
      purpose: "Quản lý công việc & theo dõi tiến độ",
      usage: "Quản lý theo mô hình Kanban với các cột To Do, Doing, Done. Gắn nhãn phân công thành viên phụ trách và thiết lập deadline.",
      positives: "Giao diện thẻ trực quan, dễ theo dõi tổng quan tiến trình dự án, giúp hạn chế việc trễ hạn công việc.",
      negatives: "Cần thời gian để các thành viên làm quen với luồng làm việc, một số tính năng tự động hóa bị giới hạn ở bản miễn phí."
    }
  ];

  const challenges4Data = [
    {
      title: "1. Thống nhất nội dung & hướng triển khai",
      desc: "Do các thành viên có nhiều góc nhìn và ý tưởng khác nhau về chủ đề bán dẫn dẫn đến bất đồng ý kiến ban đầu.",
      solution: "Tổ chức họp trực tiếp qua Zoom để mọi người cùng thảo luận, phân tích ưu nhược điểm từng ý tưởng và biểu quyết thống nhất hướng đi chung."
    },
    {
      title: "2. Quản lý tài liệu phân tán",
      desc: "Khi lượng file ảnh, bài viết thô tăng lên nhanh chóng, việc tìm kiếm và tổng hợp tài liệu trở nên lộn xộn.",
      solution: "Thiết lập cấu trúc thư mục chuẩn trên Google Drive, phân nhóm tài liệu theo từng danh mục cụ thể (Ảnh, Thô, Chỉnh sửa, Slide)."
    },
    {
      title: "3. Kiểm soát tiến độ các đầu việc",
      desc: "Một số nhiệm vụ của cá nhân bị chậm trễ do thiếu sự nhắc nhở và quản lý tiến trình trực quan.",
      solution: "Đưa toàn bộ công việc lên bảng Trello, thiết lập thời hạn hoàn thành (Due Date) rõ ràng và yêu cầu cập nhật trạng thái thẻ mỗi ngày."
    }
  ];

  const evidence4Images = [
    {
      file: "image1.png",
      title: "Google Drive & Google Docs",
      desc: "Minh chứng hệ thống lưu trữ tài liệu trên Google Drive (bao gồm các thư mục phân loại rõ ràng) và văn bản soạn thảo nội dung thuyết trình nhóm trên Google Docs."
    },
    {
      file: "image2.png",
      title: "Họp trực tuyến qua Zoom",
      desc: "Hình ảnh buổi họp nhóm online trên nền tảng Zoom để thảo luận kịch bản thuyết trình, phân chia nhiệm vụ và tổng hợp slide báo cáo của từng thành viên."
    },
    {
      file: "image3.png",
      title: "Bảng quản lý tiến độ Trello",
      desc: "Giao diện quản lý dự án trên Trello theo phương pháp Kanban (To Do, Doing, Done), thể hiện rõ các đầu việc, người chịu trách nhiệm và thời hạn cụ thể."
    }
  ];

  const production5Data = [
    {
      title: "1. Giai đoạn nghiên cứu & Sản xuất nội dung",
      tool: "Google Gemini / ChatGPT",
      prompt: "Hãy đóng vai là một chuyên gia môi trường, lập dàn ý chi tiết cho bài viết 'Tác động của rác thải nhựa đến hệ sinh thái biển'. Sau đó, viết chi tiết phần 1: Thực trạng rác thải nhựa hiện nay tại Đông Nam Á, kèm theo các số liệu thống kê từ các nguồn uy tín.",
      result: "AI cung cấp dàn ý gồm 4 phần và các số liệu cụ thể (ví dụ: lượng rác thải đổ ra biển mỗi năm).",
      intervention: "AI cung cấp số liệu thô tốt nhưng hành văn đôi chỗ bị rập khuôn, thiếu cảm xúc kết nối với người đọc. Bạn chủ động viết lại đoạn mở bài bằng một câu chuyện thực tế về một chú rùa biển bị vướng lưới để tăng tính lay động, đồng thời kiểm tra lại độ xác thực của các số liệu (fact-check).",
      contribAI: 45,
      contribUser: 55
    },
    {
      title: "2. Giai đoạn tạo hình ảnh minh họa",
      tool: "DALL-E 3 / Midjourney",
      prompt: "A cinematic realistic shot of a sea turtle swimming through heavy plastic waste in a dark blue ocean, cinematic lighting, photorealistic, 8k resolution --ar 16:9",
      result: "Một bức ảnh có độ tương phản cao, lột tả trực quan sự ngột ngạt của đại dương.",
      intervention: "Bạn đưa ảnh vào công cụ hậu kỳ để blend lại màu sắc cho khớp với bộ nhận diện thương hiệu của chiến dịch (tông xanh dương đậm và xám).",
      contribAI: 60,
      contribUser: 40
    },
    {
      title: "3. Giai đoạn thiết kế Infographic",
      tool: "Canva AI / Napkin AI",
      prompt: "Nhập các số liệu thống kê từ Phần 1 vào Canva Magic Design với yêu cầu: 'Tạo một Infographic định dạng dọc về số liệu ô nhiễm nhựa, phong cách tối giản, hiện đại.'",
      result: "Một layout bố cục các cột số liệu khá rõ ràng.",
      intervention: "Bố cục tự động của AI đôi chỗ làm text bị đè lên hình. Bạn đã tự tay căn chỉnh lại khoảng cách (padding), đổi font chữ sang font dễ đọc hơn (Montserrat) và chèn thêm các icon tùy chỉnh.",
      contribAI: 50,
      contribUser: 50
    }
  ];

  const comparison5Data = [
    {
      tool: "Google Gemini (AI Văn bản)",
      strengths: "Tốc độ tư duy dàn ý cực nhanh; khả năng tổng hợp thông tin đa chiều và gợi ý góc nhìn mới mẻ.",
      weaknesses: "Đôi khi gặp hiện tượng \"ảo tưởng\" (hallucination), cung cấp số liệu cũ hoặc chưa kiểm chứng.",
      workflowChange: "Chuyển từ \"Viết từ trang giấy trắng\" sang \"Biên tập và tối ưu hóa nội dung dựa trên bộ khung\"."
    },
    {
      tool: "Midjourney / DALL-E (AI Hình ảnh)",
      strengths: "Tạo ra hình ảnh có tính ẩn dụ cao, độ phân giải sắc nét, hiện thực hóa được các ý tưởng trừu tượng.",
      weaknesses: "Khó kiểm soát chính xác các chi tiết nhỏ (ví dụ: chữ viết trên ảnh thường bị lỗi font hiển thị).",
      workflowChange: "Không còn phụ thuộc vào kho ảnh stock miễn phí, tự do sáng tạo tư liệu truyền thông riêng."
    },
    {
      tool: "Canva AI / Napkin AI (AI Thiết kế)",
      strengths: "Tự động hóa việc sắp xếp layout, tiết kiệm 70% thời gian thiết kế thô từ số liệu.",
      weaknesses: "Các mẫu thiết kế có sẵn của AI đôi khi bị rập khuôn, chưa có sự đột phá về mặt mỹ thuật độc bản.",
      workflowChange: "Chuyển vai trò từ người thiết kế kỹ thuật sang người định hướng thẩm mỹ và kiểm soát chất lượng (Art Director)."
    }
  ];

  const ethics5Data = [
    {
      icon: "🤝",
      title: "Vai trò: Cộng sự tư duy (Co-thinker)",
      content: "AI không thay thế con người mà đóng vai trò là một cộng sự tăng tốc hiệu năng. Quy trình bình thường mất 3-5 ngày được rút ngắn xuống còn 5 giờ. Sự khác biệt tạo nên tính \"Xuất sắc\" của sản phẩm chính là nhãn quan nghệ thuật, trải nghiệm sống và sự đồng cảm của con người."
    },
    {
      icon: "🛡️",
      title: "Bản quyền dữ liệu (Copyright)",
      content: "Các AI hình ảnh được huấn luyện trên hàng triệu tác phẩm của các họa sĩ mà chưa có sự đồng ý rõ ràng. Việc sử dụng sản phẩm AI thương mại cần hết sức cẩn trọng và có trách nhiệm tôn trọng quyền sáng tạo gốc."
    },
    {
      icon: "💡",
      title: "Minh bạch & Chính trực học thuật",
      content: "Người sáng tạo nội dung có nghĩa vụ phải công khai rõ ràng tỷ lệ đóng góp của AI và con người. Việc mạo nhận sản phẩm tự động 100% của AI là sức lao động cá nhân là vi phạm đạo đức nghiêm trọng."
    },
    {
      icon: "⚖️",
      title: "Sự thiên lệch thông tin (Bias)",
      content: "Các mô hình ngôn ngữ lớn thường tổng hợp thông tin từ nguồn tiếng Anh/phương Tây nhiều hơn, dẫn đến cái nhìn phiến diện hoặc không chính xác khi áp dụng trực tiếp vào bối cảnh cụ thể tại Việt Nam."
    }
  ];

  const evidence5Images = [
    {
      file: "image1.png",
      title: "Prompting & Kết quả trên Gemini",
      desc: "Minh chứng quá trình thiết lập Prompt chuyên gia môi trường và kết quả tạo lập dàn ý chi tiết bài viết trên Google Gemini."
    },
    {
      file: "image2.png",
      title: "Prompting tạo hình trên DALL-E / Midjourney",
      desc: "Minh chứng quá trình nhập mô tả tiếng Anh chi tiết kèm từ khóa kỹ thuật nghệ thuật để AI xuất bản ảnh rùa biển bơi qua rác thải nhựa."
    },
    {
      file: "image3.png",
      title: "Giao diện thiết kế trên Canva AI",
      desc: "Minh chứng giao diện làm việc trên Canva AI khi xử lý bố cục, điều chỉnh font Montserrat, chèn icon và căn chỉnh padding infographic số liệu."
    }
  ];

  const policies6Data = [
    "Không sử dụng AI để làm toàn bộ bài tập rồi nộp như sản phẩm cá nhân.",
    "Sinh viên phải tự mình đối chiếu, kiểm chứng lại toàn bộ thông tin do AI cung cấp.",
    "Phải trích dẫn hoặc ghi chú minh bạch khi có sử dụng AI trong quá trình thực hiện bài tập.",
    "Tuyệt đối không sử dụng AI để gian lận trong thi cử, kiểm tra trực tuyến hoặc tự luận.",
    "Nội dung sản phẩm cuối cùng bắt buộc phải thể hiện tư duy phân tích và sự chỉnh sửa của chính người học."
  ];

  const task6Data = {
    title: "Tác động của AI đối với giáo dục hiện đại",
    prompts: [
      { prompt: "Hãy gợi ý dàn ý cho bài thuyết trình về tác động của AI trong giáo dục.", type: "Định hướng cấu trúc" },
      { prompt: "Cho ví dụ thực tế về AI được sử dụng trong học tập.", type: "Thu thập dữ liệu thực tế" },
      { prompt: "Tóm tắt lợi ích và hạn chế của AI trong giáo dục.", type: "Phân tích đa chiều" },
      { prompt: "Gợi ý cách trình bày slide ngắn gọn, dễ hiểu.", type: "Tối ưu hóa trình diễn" }
    ],
    outputs: [
      { title: "Cấu trúc dàn bài", content: "Dàn ý chi tiết gồm 3 phần rõ ràng: Mở đầu bối cảnh, Nội dung chính phân tích, và Kết luận rút ra bài học." },
      { title: "Ví dụ thực tế", content: "ChatGPT hỗ trợ lên lộ trình tự học, hệ thống AI chấm bài tự động và các nền tảng giảng dạy trực tuyến cá nhân hóa theo năng lực học viên." },
      { title: "Lợi ích cốt lõi", content: "Tiết kiệm tối đa thời gian tra cứu, gợi ý ý tưởng đa chiều nhanh chóng, cá nhân hóa nhịp độ học tập." },
      { title: "Hạn chế lớn", content: "Nguy cơ lệ thuộc công nghệ, bẫy thông tin sai lệch (hallucination) và làm suy yếu khả năng tư duy độc lập nếu lạm dụng." }
    ],
    interventions: [
      { step: "Fact-checking", text: "Kiểm tra chéo các nguồn dữ liệu học thuật chính thống để xác thực số liệu do AI gợi ý." },
      { step: "Filtering", text: "Lọc bỏ những ý trùng lặp, nội dung quá chung chung hoặc sáo rỗng." },
      { step: "Re-writing", text: "Chủ động viết lại toàn bộ nội dung theo văn phong cá nhân và bổ sung lập luận độc lập." },
      { step: "Contextualizing", text: "Lồng ghép ví dụ thực tế tại trường lớp Việt Nam và đưa ra quan điểm cá nhân để tăng sức thuyết phục." }
    ]
  };

  const ethics6Data = [
    {
      title: "1. Hỗ trợ hợp lý vs Gian lận học thuật",
      desc: "Ranh giới nằm ở sự chủ động tư duy. Dùng AI gợi ý dàn ý, sửa lỗi ngữ pháp, hay giải thích khái niệm là hỗ trợ hợp lệ. Nhưng chép nguyên văn văn bản AI tạo ra rồi mạo nhận là sản phẩm của mình là đạo văn và gian lận nghiêm trọng.",
      icon: "⚖️"
    },
    {
      icon: "🔒",
      title: "2. Quyền sở hữu trí tuệ & Đạo văn",
      desc: "AI tạo nội dung dựa trên kho dữ liệu khổng lồ thu thập từ internet mà không xin phép tác giả gốc. Sử dụng dữ liệu AI không kiểm chứng và thiếu trích dẫn minh bạch có nguy cơ vi phạm bản quyền gián tiếp."
    },
    {
      icon: "🧠",
      title: "3. Suy giảm nhận thức & Lệ thuộc",
      desc: "Lạm dụng AI khiến người học bỏ qua quá trình vật lộn với ngôn từ và ý tưởng. Điều này lâu dần làm thui chột kỹ năng lập luận, viết văn và giải quyết vấn đề thực tế - những kỹ năng cốt lõi của giáo dục."
    }
  ];

  const principles6Data = [
    { rule: "Chỉ dùng AI hỗ trợ tìm ý tưởng và định cấu trúc, tuyệt đối không chép nguyên văn.", status: "cốt lõi" },
    { rule: "Luôn kiểm chứng thông tin từ các nguồn sách, báo, tài liệu học thuật uy tín khác.", status: "bắt buộc" },
    { rule: "Minh bạch khai báo tỷ lệ sử dụng AI và ghi chú công cụ rõ ràng trong phần mục lục.", status: "trách nhiệm" },
    { rule: "Bản thân tự hoàn thành tối thiểu 70% khối lượng nội dung và viết văn phong cá nhân.", status: "tự lực" },
    { rule: "Tuyệt đối không dùng AI làm bài thi, kiểm tra trực tuyến hoặc tự luận đánh giá.", status: "nghiêm cấm" },
    { rule: "Tôn trọng bản quyền tác giả bằng cách trích dẫn nguồn học thuật chính thống.", status: "đạo đức" }
  ];

  const renderFormattedProcess = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentPreGroup: string[] = [];

    lines.forEach((line, idx) => {
      const isTreeLine = line.includes('├──') || line.includes('└──') || line.trim().startsWith('- /') || line.trim().startsWith('/');
      if (isTreeLine) {
        currentPreGroup.push(line);
      } else {
        if (currentPreGroup.length > 0) {
          elements.push(
            <pre key={`pre-${idx}`} className="font-mono text-xs bg-black/30 border border-white/10 rounded-xl p-4 my-2 leading-relaxed select-all overflow-x-auto text-left">
              {currentPreGroup.join('\n')}
            </pre>
          );
          currentPreGroup = [];
        }
        elements.push(
          <p key={`p-${idx}`} className="text-foreground/90 text-sm leading-relaxed my-1">
            {line}
          </p>
        );
      }
    });

    if (currentPreGroup.length > 0) {
      elements.push(
        <pre key="pre-last" className="font-mono text-xs bg-black/30 border border-white/10 rounded-xl p-4 my-2 leading-relaxed select-all overflow-x-auto text-left">
          {currentPreGroup.join('\n')}
        </pre>
      );
    }

    return <div className="text-left">{elements}</div>;
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-background text-foreground selection:bg-white/10 selection:text-white">
      {/* Background Loop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Glassmorphic Navigation Bar */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-8 py-6 flex flex-row items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleTabChange('home')}
          className="text-4xl font-display tracking-tight text-foreground hover:opacity-90 transition-opacity cursor-pointer bg-transparent border-none p-0"
        >
          Portfolio
        </button>

        {/* Navigation Links & Student Info Badge (Hidden on mobile) */}
        <div className="hidden md:flex flex-row items-center gap-8">
          <ul className="flex flex-row items-center gap-8">
            <li>
              <button
                onClick={() => handleTabChange('home')}
                className={`text-base font-semibold transition-colors cursor-pointer ${
                  activeTab === 'home' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Trang chủ
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange('projects')}
                className={`text-base font-semibold transition-colors cursor-pointer ${
                  activeTab === 'projects' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Dự án
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabChange('summary')}
                className={`text-base font-semibold transition-colors cursor-pointer ${
                  activeTab === 'summary' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Tổng kết
              </button>
            </li>
          </ul>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-border" />

          {/* Student Info in Nav */}
          <span className="text-sm text-slate-300 font-mono tracking-wide">
            MSSV: 25020930  •  Vật lý kỹ thuật
          </span>
        </div>
      </nav>

      {/* TAB 1: Trang chủ (Hero Section) */}
      {activeTab === 'home' && (
        <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] my-auto max-w-7xl mx-auto w-full">
          {/* Student Top Badge */}
          <div className="animate-fade-rise inline-block">
            <div className="liquid-glass px-6 py-2.5 rounded-full mb-8">
              <span className="text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase text-slate-200 font-mono">
                Nguyễn Doãn Minh Hiếu — Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo
              </span>
            </div>
          </div>

          {/* Description Subtext */}
          <p className="animate-fade-rise-delay text-body-large text-slate-200 max-w-4xl mt-10 leading-loose">
            Xin chào, tôi là Nguyễn Doãn Minh Hiếu, hiện đang theo học ngành Vật lý kỹ thuật với mã số sinh viên là 25020930. Bên cạnh nền tảng tư duy logic và kỹ thuật chuyên sâu từ chuyên ngành chính, tôi còn đặc biệt đam mê khám phá làn sóng công nghệ mới, tiêu biểu là việc nghiên cứu và ứng dụng Trí tuệ nhân tạo thông qua môn học Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo. Sự kết hợp giữa tư duy vật lý và công nghệ số giúp tôi luôn hào hứng tìm kiếm những giải pháp sáng tạo, tối ưu cho các bài toán thực tế.
          </p>

          {/* Hero CTA Button */}
          <div className="animate-fade-rise-delay-2">
            <button
              onClick={() => handleTabChange('projects')}
              className="liquid-glass rounded-full px-16 py-5.5 text-lg font-bold text-white mt-14 hover:scale-[1.05] shadow-lg shadow-white/5 transition-all duration-300 cursor-pointer"
            >
              Xem Dự án
            </button>
          </div>
        </main>
      )}

      {/* TAB 2: Dự án */}
      {activeTab === 'projects' && (
        <main className="relative z-10 flex flex-col items-center px-6 py-12 max-w-7xl mx-auto w-full animate-fade-rise my-auto">
          {/* Sub-view: Grid of Cards (selectedProjectId is null) */}
          {selectedProjectId === null ? (
            <>
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs tracking-[0.25em] font-semibold uppercase text-slate-200 liquid-glass px-5 py-2.5 rounded-full mb-5 inline-block">
                  Danh sách Dự án
                </span>
                <h2 className="text-5xl md:text-6xl font-display font-normal tracking-tight mt-3 text-white">
                  Báo cáo kết quả bài tập
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
                  Tập trung vào việc biên tập và trình bày lại kết quả của các bài tập nhỏ từ Bài 1 đến Bài 6. Ấn chọn từng bài tập để xem chi tiết.
                </p>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedProjectId(project.id)
                      setViewMode(project.id === 1 ? 'images' : 'text') // Default view mode for project 1 is image slider
                      setCurrentStep(0)
                    }}
                    className="liquid-glass p-8 rounded-[24px] flex flex-col items-start text-left cursor-pointer hover:scale-[1.03] hover:border-white/25 hover:shadow-2xl hover:shadow-white/[0.02] transition-all duration-300 w-full group"
                  >
                    {/* Icon Header */}
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 mb-4 group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                      {getIcon(project.iconName)}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-normal text-white mb-3">
                      Bài {project.id}: {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mt-1">
                      {project.description}
                    </p>
                    
                    {/* Read more indicator */}
                    <span className="text-xs font-semibold text-slate-400 mt-5 group-hover:text-white transition-colors font-mono uppercase">
                      Xem chi tiết →
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Sub-view: Separate Project Details Page (selectedProjectId is NOT null) */
            selectedProject && (
              <div className="w-full max-w-7xl mx-auto animate-fade-rise">
                {/* Back Button */}
                <button
                  onClick={() => {
                    setSelectedProjectId(null)
                                      }}
                  className="flex items-center gap-2.5 text-sm font-mono font-semibold uppercase text-slate-300 hover:text-white cursor-pointer transition-colors mb-8 liquid-glass px-5 py-2.5 rounded-full"
                >
                  <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
                </button>

                {/* Main Content Area */}
                <div className="liquid-glass p-10 md:p-12 rounded-[32px]">
                  {/* Detail Page Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-display font-normal text-white">
                        Bài {selectedProject.id}: {selectedProject.title}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed italic mt-3">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      {/* View Mode Toggle for Project 1 */}
                      {selectedProject.id === 1 && (
                        <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/10">
                          <button
                            onClick={() => setViewMode('text')}
                            className={`px-4 py-2.5 rounded-md cursor-pointer transition-colors flex items-center gap-2 text-sm font-semibold ${viewMode === 'text' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                          >
                            <FileText className="w-3.5 h-3.5" /> Báo cáo
                          </button>
                          <button
                            onClick={() => setViewMode('images')}
                            className={`px-4 py-2.5 rounded-md cursor-pointer transition-colors flex items-center gap-2 text-sm font-semibold ${viewMode === 'images' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                          >
                            <ImageIcon className="w-3.5 h-3.5" /> Minh chứng
                          </button>
                        </div>
                      )}
                      
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        {getIcon(selectedProject.iconName)}
                      </div>
                    </div>
                  </div>

                  {/* Editing Form */}
                  {viewMode === 'images' && selectedProject.id === 1 ? (
                    /* Slider View Mode */
                    <div className="space-y-6 animate-fade-rise">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg text-white">📸 Minh chứng hình ảnh thực hành từng bước:</h4>
                        <span className="text-sm font-mono font-semibold text-slate-300">Bước {currentStep + 1} / {steps.length}</span>
                      </div>

                      {/* Image Viewer */}
                      <div className="relative w-full aspect-video sm:max-h-[400px] rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
                        <img
                          src={`/images/bai1/${stepFiles[currentStep]}`}
                          alt={steps[currentStep].text}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80`
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 text-center">
                          <span className="text-sm sm:text-base font-bold text-white tracking-wide">{steps[currentStep].text}</span>
                        </div>
                      </div>

                      {/* Slider Controls */}
                      <div className="flex items-center justify-between gap-4">
                        <button
                          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                          disabled={currentStep === 0}
                          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white disabled:opacity-35 disabled:hover:bg-white/5 cursor-pointer transition-all text-sm font-semibold"
                        >
                          <ChevronLeft className="w-4 h-4" /> Trước đó
                        </button>
                        
                        {/* Slide Indicators */}
                        <div className="hidden sm:flex items-center gap-1.5">
                          {steps.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentStep(idx)}
                              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${currentStep === idx ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/45'}`}
                              title={`Tới bước ${idx + 1}`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                          disabled={currentStep === steps.length - 1}
                          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white disabled:opacity-35 disabled:hover:bg-white/5 cursor-pointer transition-all text-sm font-semibold"
                        >
                          Kế tiếp <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Step description */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                        <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">Mô tả hành động:</span>
                        <p className="text-base text-white leading-relaxed italic font-medium">
                          {steps[currentStep].desc}
                        </p>
                      </div>
                      
                      {/* Drive Folder Link */}
                      <div className="flex justify-end pt-2">
                        <a
                          href="https://drive.google.com/drive/folders/1_5pfiNH25Xg2ZkemwYdxIAtYQW4NGhxf?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                        >
                          <FolderTree className="w-3.5 h-3.5" /> Xem báo cáo & Minh chứng gốc
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Text Mode */
                    <div className="space-y-6 animate-fade-rise">
                      {selectedProject.id === 2 ? (
                        /* Special layout for Project 2 Academic Report */
                        <div className="space-y-8 text-left">
                          {/* Metadata Summary */}
                          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
                            <h4 className="text-3xl font-display font-normal mb-3 text-white">
                              Chủ đề nghiên cứu
                            </h4>
                            <p className="text-base text-slate-200 leading-relaxed font-sans font-semibold mb-6">
                              Nghiên cứu xu hướng phát triển và tiềm năng ứng dụng của Vật liệu bán dẫn hai chiều (2D Materials) MoS2 trong việc thay thế Silicon cho Transistor thế hệ mới.
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm font-mono text-slate-300">
                              <span>🎓 Ngành học: Vật lý Kỹ thuật / Công nghệ Bán dẫn và Vi mạch</span>
                              <span>👤 Tác giả: Nguyễn Doãn Minh Hiếu</span>
                              <span>🆔 MSSV: 25020930</span>
                            </div>
                          </div>

                          {/* Section 1: Introduction */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                            <h4 className="text-2xl font-display font-normal text-white mb-4">
                              I. Mở đầu & Phạm vi nghiên cứu
</h4>
                            <div className="space-y-6 text-body-primary font-sans">
                              <p>
                                <strong>1. Lý do chọn chủ đề & Tính thách thức:</strong><br />
                                Trong hơn nửa thế kỷ qua, định luật Moore đã dẫn dắt ngành công nghiệp bán dẫn bằng việc thu nhỏ kích thước của các Transistor lưỡng cực cổng cách điện dựa trên nền tảng Silicon (Si). Tuy nhiên, khi tiến trình chế tạo chip tiến dần đến giới hạn vật lý dưới 2 nm, vật liệu Silicon truyền thống đối mặt với những thách thức nghiêm trọng: hiệu ứng kênh ngắn (Short-channel effects), dòng rò lượng tử ở trạng thái tắt gia tăng, và sự bốc bay nhiệt lượng cực lớn gây giảm hiệu suất linh kiện.
                              </p>
                              <p>
                                Để giải quyết bài toán này, ngành Vật lý Kỹ thuật đang tập trung nghiên cứu các vật liệu bán dẫn hai chiều (2D Materials), nổi bật nhất là Molybdenum Disulfide (MoS2). Với độ dày chỉ bằng một lớp đơn nguyên tử, MoS2 sở hữu khoảng dải năng lượng (Bandgap) dạng trực tiếp khoảng 1.8 eV (khác với Graphene không có bandgap), cho phép kiểm soát dòng điện ở trạng thái tắt/mở cực kỳ hiệu quả. Việc nghiên cứu xu hướng và đánh giá tiềm năng của MoS2 thay thế Silicon là một đề tài có tính thách thức kỹ thuật cao, mang tính thời sự toàn cầu trong giai đoạn 2024–2026.
                              </p>
                              <p>
                                <strong>2. Phạm vi tìm kiếm thông tin:</strong><br />
                                - Giới hạn thời gian: Tài liệu xuất bản chủ yếu từ năm 2020 đến 2026 để đảm bảo tính cập nhật.<br />
                                - Cơ sở dữ liệu tiếp cận: Google Scholar, ScienceDirect, IEEE Xplore, và các báo cáo chiến lược từ các tổ chức công nghệ vi mạch uy tín (TSMC, Intel, IMEC).<br />
                                - Từ khóa tìm kiếm: <code className="bg-white/5 px-2 py-1 rounded text-xs border border-white/5">"MoS2 transistor", "2D semiconductors", "short-channel effects", "Silicon replacement"</code>.
                              </p>
                            </div>
                          </div>

                          {/* Section 2: Table of 10 Sources */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                            <h4 className="text-2xl font-display font-normal text-white mb-4">
                              II. Quy trình tìm kiếm & Bảng tổng hợp nguồn thông tin
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed mb-6">
                              Quá trình tìm kiếm đã thu thập và sàng lọc được 10 tài liệu tham khảo cốt lõi, bao gồm 6 bài báo khoa học đỉnh cao thuộc danh mục ISI/Scopus, 2 sách chuyên khảo và 2 nguồn mở uy tín từ các viện nghiên cứu công nghệ lớn toàn cầu. Bảng tổng hợp đánh giá dưới đây dựa trên tiêu chí CRAAP:
                            </p>
                            
                            {/* Desktop Spreadsheet View */}
                            <div className="hidden lg:block overflow-x-auto rounded-xl border border-white/10 bg-black/20">
                              <table className="w-full text-sm text-left text-foreground/90 border-collapse">
                                <thead className="bg-white/5 border-b border-white/10 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                                  <tr>
                                    <th className="p-4 text-center border-r border-white/10 w-12">STT</th>
                                    <th className="p-4 border-r border-white/10 min-w-[220px]">Tài liệu tham khảo</th>
                                    <th className="p-4 border-r border-white/10 w-28">Loại nguồn</th>
                                    <th className="p-4 border-r border-white/10 w-36">Phương pháp</th>
                                    <th className="p-4 border-r border-white/10 min-w-[240px]">Ưu điểm & Hạn chế</th>
                                    <th className="p-4 w-32">Độ tin cậy</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                  {academicSources.map((source) => (
                                    <tr key={source.stt} className="hover:bg-white/[0.02] transition-colors">
                                      <td className="p-4 text-center border-r border-white/10 font-mono font-bold text-slate-400">{source.stt}</td>
                                      <td className="p-4 border-r border-white/10 font-medium text-white">{source.citation}</td>
                                      <td className="p-4 border-r border-white/10 text-slate-300 font-mono text-xs">{source.type}</td>
                                      <td className="p-4 border-r border-white/10 text-slate-200">{source.method}</td>
                                      <td className="p-4 border-r border-white/10 text-slate-200 space-y-2">
                                        <div className="leading-relaxed">🚀 <strong className="text-white text-xs">Ưu thế:</strong> {source.positives}</div>
                                        <div className="leading-relaxed">⚠️ <strong className="text-white text-xs">Hạn chế:</strong> {source.negatives}</div>
                                      </td>
                                      <td className="p-4 text-emerald-400 font-semibold text-xs">{source.reliability}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            {/* Mobile Card List View */}
                            <div className="block lg:hidden space-y-4">
                              {academicSources.map((source) => (
                                <div key={source.stt} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-3">
                                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                    <span className="text-xs font-mono font-bold text-slate-400">Nguồn {source.stt}</span>
                                    <span className="text-xs font-mono px-2.5 py-0.5 bg-white/5 rounded-full border border-white/5 text-slate-300">{source.type}</span>
                                  </div>
                                  <div className="text-sm font-semibold text-white leading-relaxed">{source.citation}</div>
                                  <div className="text-xs text-slate-300"><strong className="text-white">Phương pháp:</strong> {source.method}</div>
                                  <div className="space-y-1.5 text-xs text-slate-300">
                                    <div className="leading-relaxed">🚀 <strong className="text-white">Ưu thế:</strong> {source.positives}</div>
                                    <div className="leading-relaxed">⚠️ <strong className="text-white">Hạn chế:</strong> {source.negatives}</div>
                                  </div>
                                  <div className="text-xs font-semibold text-emerald-400 border-t border-white/5 pt-2 flex items-center justify-between">
                                    <span>Độ tin cậy:</span>
                                    <span>{source.reliability}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Section 3: Overview Analysis */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                            <h4 className="text-2xl font-display font-normal text-white mb-4">
                              III. Phân tích & Nhận xét tổng quan
                            </h4>
                            <div className="space-y-6 text-body-primary font-sans">
                              <p>
                                <strong>1. Ưu thế vật lý vượt trội so với Silicon:</strong><br />
                                Các tài liệu từ Nature Nanotechnology và Science đồng loạt khẳng định: Khi độ dày Silicon giảm xuống dưới 3 nm, các electron sẽ không còn bị giữ trong kênh dẫn do hiệu ứng hầm ngầm lượng tử, gây ra dòng rò lớn. Ngược lại, MoS2 lớp đơn nguyên tử (độ dày chỉ khoảng 0.65 nm) có hằng số điện môi hiệu dụng thấp và khoảng dải thế (1.8 eV) lớn, giúp các điện tử bị khóa chặt trong kênh dẫn khi Transistor ở trạng thái ngắt. Điều này giúp giảm điện năng tiêu thụ của chip điện thoại, máy tính xuống hàng chục lần.
                              </p>
                              <p>
                                <strong>2. Những rào cản kỹ thuật lớn nhất hiện nay:</strong><br />
                                Mặc dù có tiềm năng lý thuyết rất lớn, các nguồn tài liệu kỹ thuật từ IEEE và báo cáo của TSMC đã thẳng thắn chỉ ra các điểm nghẽn (khoảng trống nghiên cứu) cần giải quyết trong giai đoạn hiện nay:
                              </p>
                              <ul className="list-disc pl-5 space-y-1.5">
                                <li><strong>Điện trở tiếp xúc (Contact Resistance):</strong> Liên kết giữa các dây dẫn kim loại truyền thống (Vàng, Titan) với màng MoS2 tạo ra hàng rào năng lượng Schottky lớn, làm cản trở dòng điện chạy qua.</li>
                                <li><strong>Kỹ thuật chế tạo quy mô lớn (Scalability):</strong> Việc tổng hợp màng MoS2 hoàn hảo, không có lỗi khuyết tật tinh thể trên các tấm Wafer kích thước lớn (300 mm) bằng phương pháp lắng đọng hơi hóa học (CVD) vẫn là một thách thức cực kỳ lớn so với công nghệ chế tạo Silicon đã hoàn thiện 60 năm qua.</li>
                              </ul>
                              <p>
                                <strong>3. Xu hướng và lộ trình phát triển giai đoạn 2026–2030:</strong><br />
                                Theo lộ trình từ viện nghiên cứu IMEC (2025), ngành công nghiệp bán dẫn không thay thế hoàn toàn Silicon ngay lập tức. Xu hướng dịch chuyển sẽ diễn ra theo dạng "tích hợp lai" (Hybrid integration): Silicon vẫn làm lớp đế xử lý logic bên dưới, trong khi MoS2 được xếp chồng lên trên thành cấu trúc chip 3D (3D Power-scaling). Dự kiến các dòng chip thương mại hóa đầu tiên ứng dụng một phần vật liệu 2D sẽ chính thức xuất hiện trên thị trường vào giai đoạn 2028–2030.
                              </p>
                            </div>
                          </div>

                          {/* Section 4: Harvard References */}
                          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                            <h4 className="text-2xl font-display font-normal text-white mb-4">
                              IV. Danh mục tài liệu tham khảo (Harvard Style)
                            </h4>
                            <ol className="list-decimal pl-5 text-sm text-slate-300 space-y-3 leading-relaxed font-sans">
                              <li>Das, S., Wickramaratne, D. and Appenzeller, J. (2023) 'Environmental degradation of MoS2 monolayers and its mitigation', <em>ACS Nano</em>, 17(4), pp. 3412–3422.</li>
                              <li>Desai, S. B., Madhvapathy, S. R., Sachid, A. B., Llinas, J. P., Wang, G. and Javey, A. (2023) 'MoS2 transistors with 1-nanometer gate lengths', <em>Science</em>, 354(6309), pp. 99–102.</li>
                              <li>IMEC Research Institute (2025) <em>Roadmap for 2D Materials in CMOS integration: Technological forecast to 2030</em>, Leuven: IMEC Materials Press.</li>
                              <li>Kim, C., Cho, K. and Electron Devices Society (2023) 'Contact resistance reduction techniques in monolayer MoS2 FETs via sub-surface doping', <em>IEEE Transactions on Electron Devices</em>, 70(8), pp. 4105–4111.</li>
                              <li>Liu, Y., Duan, X., Shin, Y. and Duan, X. (2021) 'Two-dimensional materials for next-generation transistors', <em>Nature Nanotechnology</em>, 16(4), pp. 317–334.</li>
                              <li>Radisavljevic, B. and Kis, A. (2022) 'Mobility engineering and charge transport in single-layer MoS2', <em>Nature Materials</em>, 11(12), pp. 1015–1020.</li>
                              <li>Schwierz, F., Pezoldt, J. and Granzner, R. (2024) <em>Two-Dimensional Electronics: Materials, Devices, and Applications</em>, Weinheim: Wiley-VCH.</li>
                              <li>Semiconductor Research Corporation (2026) <em>Decadal Plan for Semiconductors: 2026 Update on Energy-Efficient Computing</em>, Durham: SRC Publications.</li>
                              <li>TSMC R&D Team (2025) '1nm node integration challenges and manufacturing solutions with 2D semiconductors', <em>Proceedings of the International Electron Devices Meeting (IEDM)</em>, pp. 245–248.</li>
                              <li>Wang, X. (2022) <em>Advanced Semiconductor Devices and Nanostructures</em>, Boca Raton: CRC Press.</li>
                            </ol>
                          </div>
                          
                          {/* Edit button */}
                          <div className="flex justify-end gap-2 pt-2">
                            <a
                              href="https://drive.google.com/drive/folders/1_5pfiNH25Xg2ZkemwYdxIAtYQW4NGhxf?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                            >
                              <FolderTree className="w-3.5 h-3.5" /> Xem báo cáo & Minh chứng gốc
                            </a>
                            
                          </div>
                        </div>
                      ) : selectedProject.id === 3 ? (
                        /* Special layout for Project 3: Prompt Engineering */
                        <div className="space-y-8 text-left">
                          {/* Metadata Summary */}
                          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
                            <h4 className="text-3xl font-display font-normal mb-3 text-white">
                              Chủ đề nghiên cứu & Thử nghiệm
                            </h4>
                            <p className="text-base text-slate-200 leading-relaxed font-sans font-semibold mb-6">
                              Nghiên cứu và thử nghiệm kỹ thuật thiết kế câu lệnh (Prompt Engineering) nhằm tối ưu hóa hiệu quả học tập cá nhân với các Mô hình ngôn ngữ lớn (LLM).
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm font-mono text-slate-300">
                              <span>🎓 Khóa học: Nhập môn công nghệ số và ứng dụng AI</span>
                              <span>👤 Tác giả: Nguyễn Doãn Minh Hiếu</span>
                              <span>🆔 MSSV: 25020930</span>
                            </div>
                          </div>

                          {/* Sub-tabs Navigation */}
                          <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/10 w-fit">
                            <button
                              onClick={() => setActiveTab3('tasks')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab3 === 'tasks' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              I. Phân tích Tác vụ
                            </button>
                            <button
                              onClick={() => {
                                setActiveTab3('tryouts');
                                setActiveImage3(0);
                              }}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab3 === 'tryouts' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              II. Phiên bản & Thử nghiệm
                            </button>
                            <button
                              onClick={() => setActiveTab3('analysis')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab3 === 'analysis' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              III. Đánh giá & Lý thuyết
                            </button>
                          </div>

                          {/* TAB 3-1: Phân tích Tác vụ */}
                          {activeTab3 === 'tasks' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h4 className="font-display text-2xl font-medium text-white mb-4">
                                  Lựa chọn & Phân tích tác vụ học tập
                                </h4>
                                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                                  Để tối ưu hóa hiệu quả học tập thông qua Mô hình ngôn ngữ lớn (LLM), tôi đã chọn lọc và phân tích sâu 3 tác vụ học tập điển hình sau đây:
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                                  {tasks3Data.map((task, idx) => (
                                    <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex flex-col justify-between">
                                      <div>
                                        <div className="text-xs font-mono text-slate-400 mb-2">Tác vụ 0{idx + 1}</div>
                                        <h5 className="font-bold text-base text-white mb-4">{task.target}</h5>
                                        
                                        <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                                          <div>
                                            <strong className="text-white block">🎯 Mục tiêu:</strong>
                                            {task.objective}
                                          </div>
                                          <div>
                                            <strong className="text-white block">⚠️ Thách thức:</strong>
                                            {task.challenge}
                                          </div>
                                          <div>
                                            <strong className="text-white block">🧠 Bản chất tác vụ:</strong>
                                            {task.nature}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 3-2: Phiên bản & Thử nghiệm */}
                          {activeTab3 === 'tryouts' && (
                            <div className="space-y-6 animate-fade-rise">
                              {/* Task Selector */}
                              <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-xl border border-white/10 w-fit">
                                {tasks3Data.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      setActiveTask3(idx);
                                      setActiveLevel3(2);
                                      setActiveImage3(0);
                                    }}
                                    className={`px-4 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${activeTask3 === idx ? 'bg-white/10 text-white shadow-sm' : 'text-muted-foreground hover:text-white'}`}
                                  >
                                    Tác vụ {idx + 1}
                                  </button>
                                ))}
                              </div>

                              {/* Level selector */}
                              <div className="grid grid-cols-3 gap-2">
                                {tasks3Data[activeTask3].levels.map((level, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      setActiveLevel3(idx);
                                      setActiveImage3(0);
                                    }}
                                    className={`py-3.5 px-5 rounded-2xl border text-center transition-all cursor-pointer ${
                                      activeLevel3 === idx
                                        ? 'bg-white/10 border-white/30 text-white shadow-md scale-[1.02]'
                                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                                    }`}
                                  >
                                    <div className="text-[10px] font-mono uppercase opacity-60">Cấp độ {idx + 1}</div>
                                    <div className="text-xs font-semibold mt-1">{level.name.split(' (')[0]}</div>
                                  </button>
                                ))}
                              </div>

                              {/* Prompt & Analysis Details */}
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                {/* Left side: Prompt and Analysis */}
                                <div className="lg:col-span-7 space-y-6">
                                  {/* Prompt content */}
                                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative group">
                                    <div className="flex items-center justify-between mb-4">
                                      <span className="text-xs font-mono font-bold uppercase text-slate-400">📝 Cú pháp câu lệnh (Prompt)</span>
                                      
                                      <button
                                        onClick={() => {
                                          navigator.clipboard.writeText(tasks3Data[activeTask3].levels[activeLevel3].prompt);
                                          setCopiedText(true);
                                          setTimeout(() => setCopiedText(false), 2000);
                                        }}
                                        className="text-xs font-mono uppercase text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded transition-all cursor-pointer"
                                      >
                                        {copiedText ? "✓ Đã sao chép!" : "📄 Sao chép"}
                                      </button>
                                    </div>
                                    <pre className="font-mono text-sm text-foreground bg-black/40 border border-white/10 rounded-xl p-5 leading-relaxed overflow-x-auto select-all max-h-[250px] whitespace-pre-wrap text-left">
                                      {tasks3Data[activeTask3].levels[activeLevel3].prompt}
                                    </pre>
                                  </div>

                                  {/* Result Analysis */}
                                  <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                    <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-3">📊 Phân tích hiệu quả đầu ra</span>
                                    <p className="text-base text-slate-100 leading-relaxed font-sans italic font-medium">
                                      {tasks3Data[activeTask3].levels[activeLevel3].analysis}
                                    </p>
                                  </div>
                                </div>

                                {/* Right side: Image Viewer / Evidence */}
                                <div className="lg:col-span-5 space-y-4">
                                  <span className="text-[10px] font-mono uppercase text-muted-foreground/60 block">📸 Ảnh chụp minh chứng thực tế:</span>
                                  
                                  {/* Main Viewer */}
                                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center p-2 group">
                                    <img
                                      src={`/images/bai3/${tasks3Data[activeTask3].levels[activeLevel3].images[activeImage3]}`}
                                      alt="Screenshot minh chứng AI"
                                      className="w-full h-full object-contain rounded-lg"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80"
                                      }}
                                    />
                                    
                                    {/* Prev/Next buttons if multiple images */}
                                    {tasks3Data[activeTask3].levels[activeLevel3].images.length > 1 && (
                                      <>
                                        <button
                                          onClick={() => setActiveImage3(prev => Math.max(0, prev - 1))}
                                          disabled={activeImage3 === 0}
                                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                                        >
                                          <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <button
                                          onClick={() => setActiveImage3(prev => Math.min(tasks3Data[activeTask3].levels[activeLevel3].images.length - 1, prev + 1))}
                                          disabled={activeImage3 === tasks3Data[activeTask3].levels[activeLevel3].images.length - 1}
                                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                                        >
                                          <ChevronRight className="w-4 h-4" />
                                        </button>
                                      </>
                                    )}

                                    {/* Page indicator */}
                                    <div className="absolute bottom-4 right-4 bg-black/60 border border-white/10 px-2 py-0.5 rounded font-mono text-[10px] text-white">
                                      {activeImage3 + 1} / {tasks3Data[activeTask3].levels[activeLevel3].images.length}
                                    </div>
                                  </div>

                                  {/* Dot Indicators */}
                                  {tasks3Data[activeTask3].levels[activeLevel3].images.length > 1 && (
                                    <div className="flex items-center justify-center gap-1.5 mt-2">
                                      {tasks3Data[activeTask3].levels[activeLevel3].images.map((_, imgIdx) => (
                                        <button
                                          key={imgIdx}
                                          onClick={() => setActiveImage3(imgIdx)}
                                          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${activeImage3 === imgIdx ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/45'}`}
                                        />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 3-3: Đánh giá & Lý thuyết */}
                          {activeTab3 === 'analysis' && (
                            <div className="space-y-8 animate-fade-rise">
                              {/* Comparison Matrix */}
                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h5 className="font-display text-2xl font-medium text-white mb-4">
                                  Bảng so sánh tổng hợp hiệu quả Prompt
                                </h5>
                                
                                <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20">
                                  <table className="w-full text-xs text-left text-foreground/90 border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                                      <tr>
                                        <th className="p-3 border-r border-white/10 min-w-[150px]">Tiêu chí so sánh</th>
                                        <th className="p-3 border-r border-white/10 min-w-[200px]">Prompt Cơ bản (Mức 1-2)</th>
                                        <th className="p-3 border-r border-white/10 min-w-[200px]">Prompt Cải tiến (Mức 3)</th>
                                        <th className="p-3 min-w-[200px]">Prompt Nâng cao (Mức 4)</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 font-sans">
                                      {promptComparisonData.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                          <td className="p-3 border-r border-white/10 font-medium text-white">{row.criteria}</td>
                                          <td className="p-3 border-r border-white/10 text-foreground/80">{row.basic}</td>
                                          <td className="p-3 border-r border-white/10 text-foreground/90">{row.improved}</td>
                                          <td className="p-3 text-white font-medium">{row.advanced}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              {/* Theoretical Insights */}
                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h5 className="font-display text-2xl font-medium text-white mb-4">
                                  Tại sao cấu trúc Prompt lại quyết định chất lượng đầu ra?
                                </h5>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 space-y-2">
                                    <span className="font-mono text-xs font-semibold uppercase text-slate-400">01. Role Prompting</span>
                                    <h6 className="font-bold text-base text-white font-sans mt-1">Khống chế không gian phân phối</h6>
                                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                                      Khi gán vai trò cụ thể ("Giáo sư", "Nghiên cứu sinh"), ta thu hẹp không gian từ vựng của LLM từ "internet công cộng" xuống "văn bản học thuật chuẩn mực". Điều này loại bỏ các cách hành văn cẩu thả, giúp câu từ có trọng lượng và tính học thuật cao.
                                    </p>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 space-y-2">
                                    <span className="font-mono text-xs font-semibold uppercase text-slate-400">02. Chain-of-Thought</span>
                                    <h6 className="font-bold text-base text-white font-sans mt-1">Giải phóng năng lượng tính toán</h6>
                                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                                      LLM dự đoán từ tiếp theo dựa trên các từ phía trước. Khi bắt AI đi qua các bước Suy nghĩ &rarr; Phân tích &rarr; Định dạng, các từ ngữ ở bước suy nghĩ đóng vai trò là "vùng nhớ đệm", làm tiền đề ngữ cảnh để sinh ra kết luận chính xác.
                                    </p>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 space-y-2">
                                    <span className="font-mono text-xs font-semibold uppercase text-slate-400">03. Few-shot Examples</span>
                                    <h6 className="font-bold text-base text-white font-sans mt-1">Thiết lập ranh giới hành vi</h6>
                                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                                      Định nghĩa mơ hồ khiến AI khó nắm bắt. Việc cung cấp một ví dụ mẫu (Few-shot) đóng vai trò như một mỏ neo hành vi, giúp AI hiểu chính xác định dạng, biên độ và tiêu chuẩn chất lượng mong muốn.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* CRISP Framework */}
                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h5 className="font-display text-2xl font-medium text-white mb-4">
                                  Công thức Prompt học tập: C-R-I-S-P
                                </h5>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-sans">
                                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-white font-mono">C</div>
                                    <div className="text-xs font-semibold text-white mt-1">Context</div>
                                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">Khai báo rõ bối cảnh học tập, sinh viên ngành nào, năm mấy.</p>
                                  </div>
                                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold text-white font-mono">R</div>
                                    <div className="text-sm font-bold text-white mt-1">Role</div>
                                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">Gán cho AI danh phận chuyên gia phù hợp tác vụ.</p>
                                  </div>
                                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold text-white font-mono">I</div>
                                    <div className="text-sm font-bold text-white mt-1">Instruction</div>
                                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">Chỉ dẫn rõ ràng từng bước thực hiện cụ thể.</p>
                                  </div>
                                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold text-white font-mono">S</div>
                                    <div className="text-sm font-bold text-white mt-1">Style</div>
                                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">Ràng buộc phong cách, độ dài và giới hạn thông tin.</p>
                                  </div>
                                  <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold text-white font-mono">P</div>
                                    <div className="text-sm font-bold text-white mt-1">Predictable</div>
                                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">Ép định dạng đầu ra (bảng, danh sách) đoán trước.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Action button */}
                          <div className="flex justify-end gap-2 pt-2 border-t border-white/5">
                            <a
                              href="https://drive.google.com/drive/folders/1_5pfiNH25Xg2ZkemwYdxIAtYQW4NGhxf?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                            >
                              <FolderTree className="w-3.5 h-3.5" /> Xem báo cáo & Minh chứng gốc
                            </a>
                            
                          </div>
                        </div>
                      ) : selectedProject.id === 4 ? (
                        /* Special layout for Project 4: Online Collaboration Tools */
                        <div className="space-y-8 text-left animate-fade-rise">
                          {/* Metadata Summary */}
                          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
                            <h4 className="text-3xl font-display font-normal mb-3 text-white">
                              Chủ đề dự án & Phối hợp nhóm
                            </h4>
                            <p className="text-base text-slate-200 leading-relaxed font-sans font-semibold mb-6">
                              Chủ đề nhóm: “Ứng dụng AI và Công nghệ số trong ngành Vi mạch Bán dẫn tại Việt Nam”
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm font-mono text-slate-300">
                              <span>👥 Nhóm: 28-UET.A19</span>
                              <span>👤 Thành viên thực hiện: Nguyễn Doãn Minh Hiếu</span>
                              <span>🆔 MSSV: 25020930</span>
                            </div>
                          </div>

                          {/* Sub-tabs Navigation */}
                          <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/10 w-fit">
                            <button
                              onClick={() => setActiveTab4('overview')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab4 === 'overview' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              I. Tổng quan & Tiến độ
                            </button>
                            <button
                              onClick={() => setActiveTab4('tools')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab4 === 'tools' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              II. Công cụ sử dụng
                            </button>
                            <button
                              onClick={() => setActiveTab4('reflection')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab4 === 'reflection' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              III. Khó khăn & Bài học
                            </button>
                            <button
                              onClick={() => {
                                setActiveTab4('evidence');
                                setActiveImage4(0);
                              }}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab4 === 'evidence' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              IV. Minh chứng
                            </button>
                          </div>

                          {/* TAB 4-1: Tổng quan & Tiến độ */}
                          {activeTab4 === 'overview' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white">
                                  Vai trò cá nhân trong dự án nhóm
                                </h4>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                  Trong dự án lần này, em đã tích cực tham gia phối hợp với các thành viên khác bằng các công cụ số trực tuyến. Vai trò cụ thể bao gồm:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                                    <span className="text-base">📝</span>
                                    <div>
                                      <strong className="text-white block font-medium mb-1">Xây dựng nội dung:</strong>
                                      <span className="text-foreground/80">Tham gia viết kịch bản thuyết trình, đóng góp luận điểm và bổ sung dữ liệu nội dung thô.</span>
                                    </div>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                                    <span className="text-base">📂</span>
                                    <div>
                                      <strong className="text-white block font-medium mb-1">Quản lý & Lưu trữ:</strong>
                                      <span className="text-foreground/80">Phụ trách sắp xếp cấu trúc và tổ chức tài liệu, hình ảnh, slide trên Google Drive của nhóm.</span>
                                    </div>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                                    <span className="text-base">💬</span>
                                    <div>
                                      <strong className="text-white block font-medium mb-1">Họp nhóm trực tuyến:</strong>
                                      <span className="text-foreground/80">Tham gia đầy đủ các buổi họp trao đổi ý kiến trên Zoom, cùng nhóm phản biện và duyệt slide thuyết trình.</span>
                                    </div>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                                    <span className="text-base">📊</span>
                                    <div>
                                      <strong className="text-white block font-medium mb-1">Theo dõi tiến độ:</strong>
                                      <span className="text-foreground/80">Cập nhật trạng thái các đầu việc được giao trên Trello, đảm bảo hoàn thành đúng thời hạn quy định.</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h4 className="font-display text-2xl font-medium text-white mb-4">
                                  Lịch trình thực hiện & Phối hợp nhóm
                                </h4>
                                <div className="relative border-l border-white/10 pl-6 ml-3 space-y-6 font-sans">
                                  {timeline4Data.map((item, idx) => (
                                    <div key={idx} className="relative">
                                      {/* Indicator point */}
                                      <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-background" />
                                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{item.week}</div>
                                      <p className="text-sm text-foreground/90 mt-1">{item.task}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 4-2: Công cụ sử dụng */}
                          {activeTab4 === 'tools' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                                {tools4Data.map((tool, idx) => (
                                  <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                                    <div>
                                      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                                        <h5 className="font-semibold text-base text-white">{tool.name}</h5>
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-0.5 bg-white/5 rounded border border-white/5">{tool.purpose}</span>
                                      </div>
                                      
                                      <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                                        <div>
                                          <strong className="text-white block">🛠️ Cách thức sử dụng:</strong>
                                          {tool.usage}
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 pt-2">
                                          <div>
                                            <strong className="text-green-400 block mb-1">🚀 Ưu điểm:</strong>
                                            {tool.positives}
                                          </div>
                                          <div>
                                            <strong className="text-amber-400 block mb-1">⚠️ Hạn chế:</strong>
                                            {tool.negatives}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* TAB 4-3: Khó khăn & Bài học */}
                          {activeTab4 === 'reflection' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h4 className="font-display text-2xl font-medium text-white mb-4">
                                  Khó khăn thực tế & Hướng giải quyết của nhóm
                                </h4>
                                <div className="space-y-5 font-sans text-sm">
                                  {challenges4Data.map((challenge, idx) => (
                                    <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-xl p-5 space-y-2">
                                      <h5 className="font-bold text-lg text-white">{challenge.title}</h5>
                                      <p className="text-slate-300 leading-relaxed">{challenge.desc}</p>
                                      <div className="pt-2">
                                        <span className="inline-block bg-white/5 border border-white/15 px-3 py-1.5 rounded-lg text-white">
                                          🔑 <strong className="text-white">Giải pháp:</strong> {challenge.solution}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white">
                                  Bài học kinh nghiệm quý báu rút ra
                                </h4>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                  Thông qua bài tập nhóm và quá trình hợp tác trực tuyến, em đã tự đúc kết và nâng cao được các nhóm kỹ năng quan trọng phục vụ học tập và làm việc lâu dài:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-center text-xs">
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                                    <span className="text-xl block mb-2">💬</span>
                                    <strong className="text-white block font-medium">Kỹ năng giao tiếp nhóm</strong>
                                    <span className="text-muted-foreground mt-1 block">Lắng nghe, tôn trọng ý kiến khác biệt và diễn đạt suy nghĩ rõ ràng trực tuyến.</span>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                                    <span className="text-xl block mb-2">⏳</span>
                                    <strong className="text-white block font-medium">Quản lý thời gian</strong>
                                    <span className="text-muted-foreground mt-1 block">Tự giác tuân thủ deadline cá nhân để tránh làm ảnh hưởng tới tiến trình chung.</span>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                                    <span className="text-xl block mb-2">💻</span>
                                    <strong className="text-white block font-medium">Sử dụng công cụ số</strong>
                                    <span className="text-muted-foreground mt-1 block">Thao tác thành thạo các phần mềm quản lý, chia sẻ và đồng bộ tài nguyên.</span>
                                  </div>
                                  <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                                    <span className="text-xl block mb-2">🤝</span>
                                    <strong className="text-white block font-medium">Làm việc trực tuyến</strong>
                                    <span className="text-muted-foreground mt-1 block">Chủ động hỗ trợ đồng đội từ xa, chia sẻ khó khăn để cùng nhau hoàn thiện dự án.</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 4-4: Minh chứng */}
                          {activeTab4 === 'evidence' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-sm text-foreground">📸 Minh chứng hình ảnh thực tế:</h4>
                                <span className="text-xs font-mono text-muted-foreground">Ảnh {activeImage4 + 1} / {evidence4Images.length}</span>
                              </div>

                              {/* Image Viewer */}
                              <div className="relative w-full aspect-video sm:max-h-[400px] rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center p-2">
                                <img
                                  src={`/images/bai4/${evidence4Images[activeImage4].file}`}
                                  alt={evidence4Images[activeImage4].title}
                                  className="w-full h-full object-contain rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80`
                                  }}
                                />
                                
                                {/* Navigation buttons */}
                                <button
                                  onClick={() => setActiveImage4(prev => Math.max(0, prev - 1))}
                                  disabled={activeImage4 === 0}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => setActiveImage4(prev => Math.min(evidence4Images.length - 1, prev + 1))}
                                  disabled={activeImage4 === evidence4Images.length - 1}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>

                                {/* Title Overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 text-center">
                                  <span className="text-xs sm:text-sm font-semibold text-white">{evidence4Images[activeImage4].title}</span>
                                </div>
                              </div>

                              {/* Dot Indicators */}
                              <div className="flex items-center justify-center gap-1.5">
                                {evidence4Images.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveImage4(idx)}
                                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${activeImage4 === idx ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/45'}`}
                                  />
                                ))}
                              </div>

                              {/* Step description */}
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                                <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">Chi tiết minh chứng:</span>
                                <p className="text-base text-white leading-relaxed italic font-medium">
                                  {evidence4Images[activeImage4].desc}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Action button */}
                          <div className="flex justify-end gap-2 pt-2 border-t border-white/5">
                            <a
                              href="https://drive.google.com/drive/folders/1_5pfiNH25Xg2ZkemwYdxIAtYQW4NGhxf?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                            >
                              <FolderTree className="w-3.5 h-3.5" /> Xem báo cáo & Minh chứng gốc
                            </a>
                            
                          </div>
                        </div>
                      ) : selectedProject.id === 5 ? (
                        /* Special layout for Project 5: Generative AI Content Creation */
                        <div className="space-y-8 text-left animate-fade-rise">
                          {/* Metadata Summary */}
                          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
                            <h4 className="font-display text-2xl font-medium mb-3 text-white">
                              Dự án sáng tạo nội dung số có sự hỗ trợ của AI
                            </h4>
                            <p className="text-base text-slate-200 leading-relaxed font-sans font-semibold mb-6">
                              Chiến dịch truyền thông: “Giải cứu Đại dương khỏi Rác thải nhựa”
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm font-mono text-slate-300">
                              <span>📝 Sản phẩm: 1 Bài viết Blog (1500 từ) & 1 Infographic số liệu</span>
                              <span>👤 Tác giả: Nguyễn Doãn Minh Hiếu</span>
                              <span>🆔 MSSV: 25020930</span>
                            </div>
                          </div>

                          {/* Sub-tabs Navigation */}
                          <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/10 w-fit">
                            <button
                              onClick={() => setActiveTab5('overview')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab5 === 'overview' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              I. Tổng quan & Mục tiêu
                            </button>
                            <button
                              onClick={() => setActiveTab5('production')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab5 === 'production' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              II. Quy trình sản xuất
                            </button>
                            <button
                              onClick={() => setActiveTab5('analysis')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab5 === 'analysis' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              III. Phân tích công cụ AI
                            </button>
                            <button
                              onClick={() => setActiveTab5('ethics')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab5 === 'ethics' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              IV. Vai trò & Đạo đức
                            </button>
                            <button
                              onClick={() => {
                                setActiveTab5('evidence');
                                setActiveImage5(0);
                              }}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab5 === 'evidence' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              V. Minh chứng
                            </button>
                          </div>

                          {/* TAB 5-1: Tổng quan & Mục tiêu */}
                          {activeTab5 === 'overview' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white">
                                  Giới thiệu dự án
                                </h4>
                                <div className="space-y-6 text-body-primary font-sans">
                                  <p>
                                    <strong>Tên chiến dịch:</strong> Chiến dịch truyền thông số: "Giải cứu Đại dương khỏi Rác thải nhựa".
                                  </p>
                                  <p>
                                    <strong>Mục tiêu cốt lõi:</strong> Nâng cao nhận thức cộng đồng về "ô nhiễm trắng" - vấn nạn rác thải nhựa đại dương đang đe dọa trực tiếp đến đa dạng sinh học biển. Bằng việc kết hợp sức mạnh phân tích thông tin của AI và tư duy sáng tạo nghệ thuật, trải nghiệm của con người, dự án mong muốn mang đến góc nhìn trực quan, lay động và chân thực nhất.
                                  </p>
                                  <p>
                                    <strong>Sản phẩm hoàn thiện:</strong>
                                  </p>
                                  <ul className="list-disc pl-5 space-y-2">
                                    <li>Một bài viết Blog truyền thông chuyên sâu (độ dài khoảng 1500 từ) phân tích thực trạng ô nhiễm nhựa tại Đông Nam Á.</li>
                                    <li>Một hình ảnh nghệ thuật photorealistic chân thực đặc tả chú rùa biển bơi qua đống rác thải nhựa để tăng cảm xúc và truyền cảm hứng.</li>
                                    <li>Một Infographic thiết kế dạng dọc tóm tắt các số liệu ô nhiễm rác thải nhựa tại biển Đông Nam Á một cách khoa học, tinh tế.</li>
                                  </ul>
                                </div>
                              </div>

                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white border-b border-white/5 pb-2">
                                  Nội dung bài viết Blog: "Giải cứu Đại dương khỏi Rác thải nhựa"
                                </h4>
                                <div className="space-y-4 text-sm text-foreground/90 leading-relaxed font-sans max-h-[400px] overflow-y-auto pr-2 custom-scrollbar text-left">
                                  <p className="italic text-muted-foreground">
                                    Đông Nam Á, với đường bờ biển dài và hệ thống sông ngòi dày đặc, đang đứng trước một cuộc khủng hoảng sinh thái nghiêm trọng khi khu vực này trở thành tâm điểm của bản đồ ô nhiễm nhựa toàn cầu. Theo báo cáo tổng kết tiến trình thực hiện Kế hoạch Hành động Vùng ASEAN về Chống Rác thải Đại dương, khối lượng rác thải nhựa tại khu vực ASEAN+3 được dự báo sẽ tăng hơn gấp đôi, từ 113 triệu tấn lên đến 242 triệu tấn vào năm 2050 nếu không có các biện pháp can thiệp mang tính hệ thống.
                                  </p>
                                  
                                  <div>
                                    <h5 className="font-semibold text-white text-sm mb-2">1.1. Những con số "biết nói" về dòng chảy rác nhựa ra đại dương</h5>
                                    <p className="mb-3">
                                      Báo cáo từ Ngân hàng Thế giới và OECD chỉ ra một thực tế đáng báo động: các quốc gia Đông Nam Á chiếm tỷ lệ áp đảo trong danh sách các nguồn phát thải rác nhựa lớn nhất ra đại dương. Do năng lực quản lý chất thải rắn còn nhiều hạn chế, tỷ lệ rác thải nhựa được phân loại và tái chế chính quy tại khu vực này chỉ dao động dưới mức 30%.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-3">
                                      <li>
                                        <strong>Philippines:</strong> Quốc gia vạn đảo này hiện là nguồn phát thải rác nhựa đại dương lớn nhất thế giới. Theo dữ liệu mô hình hóa, Philippines thải ra hơn 350.000 tấn rác nhựa vào đại dương mỗi năm, phần lớn đến từ các dòng sông nhỏ chạy qua các khu đô thị có mật độ dân cư cao.
                                      </li>
                                      <li>
                                        <strong>Indonesia:</strong> Đứng thứ hai khu vực, mỗi năm Indonesia phát thải khoảng 0,5 đến 0,6 triệu tấn rác thải nhựa trực tiếp ra biển. Sự phụ thuộc lớn vào các loại bao bì nhựa dùng một lần (plastic pouches/sachets) cho các mặt hàng tiêu dùng nhanh (FMCG) là nguyên nhân cốt lõi khiến lượng rác thải không thể thu gom gia tăng phi mã.
                                      </li>
                                      <li>
                                        <strong>Việt Nam:</strong> Ước tính có khoảng 1,8 triệu tấn rác thải nhựa phát sinh hàng năm. Đáng chú ý, chỉ có khoảng 27% trong số này được thu gom tái chế (phần lớn do khu vực phi chính thức như làng nghề, ve chai thực hiện), dẫn tới lượng rác rò rỉ ra môi trường biển dao động từ 0,28 đến 0,73 triệu tấn/năm.
                                      </li>
                                    </ul>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-white text-sm mb-2">1.2. Hệ lụy từ làn sóng nhập khẩu rác và vấn nạn tái chế tự phát</h5>
                                    <p>
                                      Một khía cạnh u tối khác trong thực trạng tại Đông Nam Á là hệ quả từ việc "buôn bán rác quốc tế". Kể từ sau lệnh cấm nhập khẩu rác của Trung Quốc, Đông Nam Á đã vô tình trở thành "thùng rác" thế giới. Theo dữ liệu phân tích thương mại, Đông Nam Á từng tiếp nhận tới 17% tổng lượng rác thải nhựa được giao dịch toàn cầu (tương đương hơn 6,5 triệu tấn).
                                    </p>
                                    <p className="mt-2">
                                      Lượng phế liệu khổng lồ này đổ dồn vào các quốc gia như Malaysia, Việt Nam và Indonesia, làm bùng phát các cơ sở tái chế tự phát, trái phép. Các cơ sở này sử dụng công nghệ thô sơ, lạc hậu, không có hệ thống xử lý nước thải và khí thải. Quá trình đốt hoặc súc rửa nhựa phế liệu tại đây không chỉ làm phát thải các chất độc hữu cơ khó phân hủy (như Dioxin, Furan) vào không khí mà còn trực tiếp xả hàng triệu hạt vi nhựa vào hệ thống kênh rạch, xuôi dòng chảy ra biển.
                                    </p>
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-white text-sm mb-2">1.3. Áp lực từ hạt vi nhựa trong chuỗi thức ăn</h5>
                                    <p>
                                      Hệ quả trực tiếp của thực trạng phát thải và quản lý yếu kém này là sự phân rã của nhựa dưới tác động của ánh nắng mặt trời và sóng biển. Các nghiên cứu công bố bởi Greenpeace đã cảnh báo rằng: quần thể dân cư tại Đông Nam Á hiện có tỷ lệ hấp thụ (ăn/uống phải) vi nhựa thông qua hải sản cao nhất hành tinh. Ô nhiễm nhựa tại Đông Nam Á không còn là câu chuyện về mỹ quan hay tổn thất ngành du lịch (vốn gây thiệt hại lên tới 2,5 nghìn tỷ USD mỗi năm cho các dịch vụ hệ sinh thái biển toàn cầu), mà đã trực tiếp trở thành một cuộc khủng hoảng sức khỏe cộng đồng cận kề.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 5-2: Quy trình sản xuất */}
                          {activeTab5 === 'production' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="space-y-6 font-sans">
                                {production5Data.map((phase, idx) => (
                                  <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                      <h5 className="font-semibold text-base text-white">{phase.title}</h5>
                                      <span className="text-[10px] font-mono text-muted-foreground uppercase px-2 py-0.5 bg-white/5 rounded border border-white/5">{phase.tool}</span>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs leading-relaxed">
                                      <div className="lg:col-span-7 space-y-3">
                                        <div>
                                          <strong className="text-white block mb-1">📝 Cú pháp câu lệnh (Prompt):</strong>
                                          <pre className="font-mono text-[11px] text-foreground/95 bg-black/40 border border-white/10 rounded-xl p-3 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all text-left">
                                            {phase.prompt}
                                          </pre>
                                        </div>
                                        <div>
                                          <strong className="text-white block mb-1">🤖 Kết quả tự động từ AI:</strong>
                                          <p className="text-foreground/80 bg-white/[0.01] border border-white/5 p-3 rounded-lg italic">{phase.result}</p>
                                        </div>
                                      </div>
                                      <div className="lg:col-span-5 space-y-3">
                                        <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                                          <strong className="text-amber-400 block mb-1">👤 Sự can thiệp & Tinh chỉnh thủ công:</strong>
                                          <p className="text-foreground/90">{phase.intervention}</p>
                                        </div>
                                        
                                        {/* Contribution visual bar */}
                                        <div className="space-y-1">
                                          <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                                            <span>AI: {phase.contribAI}%</span>
                                            <span>Người: {phase.contribUser}%</span>
                                          </div>
                                          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden flex">
                                            <div className="bg-white/30 h-full" style={{ width: `${phase.contribAI}%` }} />
                                            <div className="bg-white h-full" style={{ width: `${phase.contribUser}%` }} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* TAB 5-3: Phân tích công cụ AI */}
                          {activeTab5 === 'analysis' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h4 className="font-display text-2xl font-medium text-white mb-4">
                                  So sánh ưu thế & Tác động lên quy trình làm việc
                                </h4>
                                <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 font-sans">
                                  <table className="w-full text-xs text-left text-foreground/90 border-collapse">
                                    <thead className="bg-white/5 border-b border-white/10 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                                      <tr>
                                        <th className="p-3 border-r border-white/10 w-32">Nền tảng / Công cụ</th>
                                        <th className="p-3 border-r border-white/10 min-w-[200px]">Điểm mạnh cốt lõi</th>
                                        <th className="p-3 border-r border-white/10 min-w-[200px]">Điểm hạn chế / Khuyết tật</th>
                                        <th className="p-3 min-w-[220px]">Sự thay đổi trong quy trình sáng tạo</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                      {comparison5Data.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                          <td className="p-3 border-r border-white/10 font-medium text-white">{row.tool}</td>
                                          <td className="p-3 border-r border-white/10 text-foreground/80">{row.strengths}</td>
                                          <td className="p-3 border-r border-white/10 text-foreground/80">{row.weaknesses}</td>
                                          <td className="p-3 text-white/90 italic">{row.workflowChange}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 5-4: Vai trò & Đạo đức */}
                          {activeTab5 === 'ethics' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white">
                                  Tái định hình quy trình & Trách nhiệm đạo đức
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm">
                                  {ethics5Data.map((item, idx) => (
                                    <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-xl p-5 space-y-2">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-base">{item.icon}</span>
                                        <h5 className="font-bold text-lg text-white">{item.title}</h5>
                                      </div>
                                      <p className="text-slate-300 leading-relaxed">{item.content}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 5-5: Minh chứng */}
                          {activeTab5 === 'evidence' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-sm text-foreground">📸 Minh chứng hình ảnh thực tế:</h4>
                                <span className="text-xs font-mono text-muted-foreground">Ảnh {activeImage5 + 1} / {evidence5Images.length}</span>
                              </div>

                              {/* Image Viewer */}
                              <div className="relative w-full aspect-video sm:max-h-[400px] rounded-2xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center p-2">
                                <img
                                  src={`/images/bai5/${evidence5Images[activeImage5].file}`}
                                  alt={evidence5Images[activeImage5].title}
                                  className="w-full h-full object-contain rounded-lg"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80`
                                  }}
                                />
                                
                                {/* Navigation buttons */}
                                <button
                                  onClick={() => setActiveImage5(prev => Math.max(0, prev - 1))}
                                  disabled={activeImage5 === 0}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => setActiveImage5(prev => Math.min(evidence5Images.length - 1, prev + 1))}
                                  disabled={activeImage5 === evidence5Images.length - 1}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>

                                {/* Title Overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 text-center">
                                  <span className="text-xs sm:text-sm font-semibold text-white">{evidence5Images[activeImage5].title}</span>
                                </div>
                              </div>

                              {/* Dot Indicators */}
                              <div className="flex items-center justify-center gap-1.5">
                                {evidence5Images.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveImage5(idx)}
                                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${activeImage5 === idx ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/45'}`}
                                  />
                                ))}
                              </div>

                              {/* Step description */}
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                                <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-2">Chi tiết minh chứng:</span>
                                <p className="text-base text-white leading-relaxed italic font-medium">
                                  {evidence5Images[activeImage5].desc}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Action button */}
                          <div className="flex justify-end gap-2 pt-2 border-t border-white/5">
                            <a
                              href="https://drive.google.com/drive/folders/1_5pfiNH25Xg2ZkemwYdxIAtYQW4NGhxf?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                            >
                              <FolderTree className="w-3.5 h-3.5" /> Xem báo cáo & Minh chứng gốc
                            </a>
                            
                          </div>
                        </div>
                      ) : selectedProject.id === 6 ? (
                        /* Special layout for Project 6: Responsible AI Principles */
                        <div className="space-y-8 text-left animate-fade-rise">
                          {/* Metadata Summary */}
                          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
                            <h4 className="font-display text-2xl font-medium mb-3 text-white">
                              Sử dụng AI có trách nhiệm trong học tập và nghiên cứu
                            </h4>
                            <p className="text-base text-slate-200 leading-relaxed font-sans font-semibold mb-6">
                              Hồ sơ nghiên cứu đạo đức học thuật & Bộ nguyên tắc cá nhân sử dụng AI
                            </p>
                            <div className="flex flex-wrap gap-6 text-sm font-mono text-slate-300">
                              <span>🎓 Học viên: Nguyễn Doãn Minh Hiếu</span>
                              <span>🆔 MSSV: 25020930</span>
                              <span>🏫 Chuyên ngành: Vật lý kỹ thuật</span>
                            </div>
                          </div>

                          {/* Sub-tabs Navigation */}
                          <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/10 w-fit">
                            <button
                              onClick={() => setActiveTab6('policies')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab6 === 'policies' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              I. Chính sách Đại học
                            </button>
                            <button
                              onClick={() => setActiveTab6('task')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab6 === 'task' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              II. Thực hành nhiệm vụ
                            </button>
                            <button
                              onClick={() => setActiveTab6('ethics')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab6 === 'ethics' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              III. Phân tích Đạo đức
                            </button>
                            <button
                              onClick={() => setActiveTab6('principles')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab6 === 'principles' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              IV. Nguyên tắc cá nhân
                            </button>
                            <button
                              onClick={() => setActiveTab6('infographic')}
                              className={`px-4.5 py-2.5 rounded-md cursor-pointer transition-colors text-sm font-semibold ${activeTab6 === 'infographic' ? 'bg-white/12 text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                              V. Infographic tương tác
                            </button>
                          </div>

                          {/* TAB 6-1: Chính sách Đại học */}
                          {activeTab6 === 'policies' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white">
                                  Nhận định chung về chính sách AI học đường
                                </h4>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                  Hầu hết các trường đại học hiện nay không cấm hoàn toàn AI, mà coi AI là một công cụ hỗ trợ hữu ích. Tuy nhiên, các chính sách học thuật đều đặt ra các ranh giới khắt khe nhằm duy trì tính trung thực và công bằng. Các nguyên tắc phổ biến bao gồm:
                                </p>
                                <div className="space-y-4 font-sans text-sm">
                                  {policies6Data.map((policy, idx) => (
                                    <div key={idx} className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-center gap-4 text-sm">
                                      <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-[10px] text-white">
                                        {idx + 1}
                                      </span>
                                      <span className="text-foreground/90">{policy}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 6-2: Thực hành nhiệm vụ */}
                          {activeTab6 === 'task' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white">
                                  Thử nghiệm nhiệm vụ thực tế: Chuẩn bị bài thuyết trình
                                </h4>
                                <div className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl text-sm font-sans">
                                  <strong className="text-white block text-sm mb-1">Chủ đề thực hành:</strong>
                                  <span className="text-foreground/85">"{task6Data.title}"</span>
                                </div>

                                {/* Prompts and Outputs */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans text-sm">
                                  <div className="space-y-4">
                                    <strong className="text-white block text-sm border-b border-white/5 pb-2">💬 Các Prompt đã sử dụng gửi AI:</strong>
                                    {task6Data.prompts.map((p, idx) => (
                                      <div key={idx} className="bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                                        <div className="text-[10px] font-mono text-muted-foreground mb-1 uppercase">{p.type}</div>
                                        <p className="font-mono text-white">"{p.prompt}"</p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="space-y-4">
                                    <strong className="text-white block text-sm border-b border-white/5 pb-2">🤖 Kết quả đầu ra thô của AI:</strong>
                                    {task6Data.outputs.map((o, idx) => (
                                      <div key={idx} className="bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                                        <strong className="text-white block mb-1">{o.title}</strong>
                                        <p className="text-foreground/85">{o.content}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Interventions */}
                                <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-4 font-sans text-sm">
                                  <strong className="text-amber-400 block text-sm">👤 Sự đánh giá, chỉnh sửa và tích hợp của con người:</strong>
                                  <p className="text-slate-300 leading-relaxed">
                                    Sau khi nhận kết quả thô, tôi không sao chép trực tiếp mà tiến hành quy trình xử lý 4 bước nghiêm ngặt:
                                  </p>
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                                    {task6Data.interventions.map((item, idx) => (
                                      <div key={idx} className="bg-black/30 border border-white/10 p-3 rounded-lg">
                                        <strong className="text-white block mb-1 font-mono text-[10px] uppercase">{item.step}</strong>
                                        <p className="text-foreground/80 leading-relaxed text-[11px]">{item.text}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 6-3: Phân tích Đạo đức */}
                          {activeTab6 === 'ethics' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                                <h4 className="font-display text-2xl font-medium text-white">
                                  Nhận định sâu sắc về các khía cạnh đạo đức học thuật
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
                                  {ethics6Data.map((item, idx) => (
                                    <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-xl p-5 space-y-2 flex flex-col">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-base">{item.icon}</span>
                                        <h5 className="font-bold text-lg text-white">{item.title}</h5>
                                      </div>
                                      <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 6-4: Nguyên tắc cá nhân */}
                          {activeTab6 === 'principles' && (
                            <div className="space-y-6 animate-fade-rise">
                              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                                <h4 className="font-display text-2xl font-medium text-white mb-4">
                                  Bộ quy tắc ứng xử cá nhân sử dụng AI có trách nhiệm
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-sans text-sm">
                                  {principles6Data.map((p, idx) => (
                                    <div key={idx} className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex flex-col justify-between space-y-3">
                                      <p className="text-foreground/90 font-medium leading-relaxed">
                                        "{p.rule}"
                                      </p>
                                      <span className="text-[10px] font-mono text-muted-foreground uppercase self-end px-2 py-0.5 bg-white/5 rounded border border-white/5">{p.status}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* TAB 6-5: Infographic tương tác */}
                          {activeTab6 === 'infographic' && (
                            <div className="space-y-6 animate-fade-rise text-center">
                              <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10 max-w-4xl mx-auto space-y-8 font-sans">
                                <div className="border-b border-white/10 pb-4">
                                  <h4 className="text-xl md:text-2xl font-normal text-white uppercase tracking-wider font-display">
                                    Sử dụng AI có trách nhiệm trong học thuật
                                  </h4>
                                  <span className="text-xs text-muted-foreground font-mono block mt-1">Học phần: Nhập môn công nghệ số — Nguyễn Doãn Minh Hiếu</span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                                  {/* DOs Card */}
                                  <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-2xl space-y-4 shadow-lg shadow-green-500/2">
                                    <div className="flex items-center gap-2 text-green-400 font-bold border-b border-green-500/10 pb-2">
                                      <span className="text-lg">✓</span>
                                      <h5 className="text-xs uppercase tracking-wider">NÊN LÀM (DOs)</h5>
                                    </div>
                                    <ul className="space-y-3.5 text-sm text-slate-200 leading-relaxed list-inside list-disc">
                                      <li>Dùng AI để gợi mở ý tưởng độc đáo, lập khung cấu trúc tổng thể.</li>
                                      <li>Chủ động kiểm tra và đối chiếu thông tin với các nguồn uy tín.</li>
                                      <li>Tự biên tập lại văn phong cá nhân và đưa góc nhìn sáng tạo riêng.</li>
                                      <li>Minh bạch trích dẫn công cụ AI đã dùng làm cơ sở dữ liệu.</li>
                                      <li>Luôn kết hợp tư duy độc lập của bản thân làm nền tảng cốt lõi.</li>
                                    </ul>
                                  </div>

                                  {/* DONTs Card */}
                                  <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl space-y-4 shadow-lg shadow-red-500/2">
                                    <div className="flex items-center gap-2 text-red-400 font-bold border-b border-red-500/10 pb-2">
                                      <span className="text-lg">✗</span>
                                      <h5 className="text-xs uppercase tracking-wider">KHÔNG NÊN LÀM (DONTs)</h5>
                                    </div>
                                    <ul className="space-y-3.5 text-sm text-slate-200 leading-relaxed list-inside list-disc">
                                      <li>Sao chép nguyên văn (copy-paste) văn bản AI tạo ra rồi đem nộp.</li>
                                      <li>Dùng AI làm phương tiện gian lận trong thi cử và đánh giá.</li>
                                      <li>Tin tưởng tuyệt đối 100% vào số liệu AI mà không qua xác thực.</li>
                                      <li>Bỏ qua khâu rà soát nguồn thông tin học thuật thực tế.</li>
                                      <li>Lệ thuộc công nghệ dẫn đến ngừng suy nghĩ và làm biến mất kỹ năng viết.</li>
                                    </ul>
                                  </div>
                                </div>

                                {/* Message quote */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 italic text-base md:text-lg text-slate-100 font-sans">
                                  "AI là công cụ hỗ trợ học tập, không phải sự thay thế cho tư duy và trách nhiệm của con người."
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Action button */}
                          <div className="flex justify-end gap-2 pt-2 border-t border-white/5">
                            <a
                              href="https://drive.google.com/drive/folders/1_5pfiNH25Xg2ZkemwYdxIAtYQW4NGhxf?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                            >
                              <FolderTree className="w-3.5 h-3.5" /> Xem báo cáo & Minh chứng gốc
                            </a>
                            
                          </div>
                        </div>
                      ) : (
                        /* Default Text Mode for other projects */
                        <>
                          {selectedProject.id !== 1 && (
                            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                              <span className="font-semibold block mb-2 text-xs uppercase tracking-wider text-muted-foreground">🛠️ Quy trình thực hiện:</span>
                              {renderFormattedProcess(selectedProject.process)}
                            </div>
                          )}
                          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                            <span className="font-semibold block mb-2 text-xs uppercase tracking-wider text-muted-foreground">📦 Sản phẩm cuối cùng:</span>
                            <p className="text-foreground/90 whitespace-pre-line leading-relaxed font-mono text-sm mb-4">{selectedProject.product}</p>
                            
                            {selectedProject.id === 1 && (
                              <div className="mt-4">
                                <span className="font-semibold block mb-2 text-xs uppercase tracking-wider text-muted-foreground/60">🖼️ Ảnh chụp cấu trúc thư mục thực tế (baocaob1.png):</span>
                                <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-2 max-h-[500px] flex items-center justify-center">
                                  <img
                                    src="/images/bai1/baocaob1.png"
                                    alt="Ảnh báo cáo cấu trúc thư mục"
                                    className="w-full h-full max-h-[460px] object-contain rounded-xl"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80`
                                    }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Action buttons */}
                          <div className="flex justify-end gap-2 pt-2">
                            <a
                              href="https://drive.google.com/drive/folders/1_5pfiNH25Xg2ZkemwYdxIAtYQW4NGhxf?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                            >
                              <FolderTree className="w-3.5 h-3.5" /> Xem báo cáo & Minh chứng gốc
                            </a>
                            
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </main>
      )}

      {/* TAB 3: Tổng kết */}
      {activeTab === 'summary' && (
        <main className="relative z-10 flex flex-col items-center px-6 py-12 max-w-7xl mx-auto w-full animate-fade-rise my-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] tracking-[0.25em] uppercase text-foreground/90 font-mono font-medium liquid-glass px-4 py-1.5 rounded-full mb-4 inline-block">
              Tổng kết môn học
            </span>
            <h2 className="text-5xl md:text-6xl font-display font-normal tracking-tight mt-3 text-white">
              Hành Trình Kiến Tạo Số & Phát Triển Năng Lực Học Thuật
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-5 leading-relaxed max-w-3xl mx-auto font-sans">
              Nhìn lại quá trình hệ thống hóa tri thức cá nhân: Từ quản trị thư mục logic, thẩm định học thuật khắt khe, đến nghệ thuật đồng sáng tạo AI và thiết lập nền tảng đạo đức số vững chắc.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
            {/* Left Column: Reflection, Co-creation (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Card 1: Personal Experience & Reflection */}
              <div className="liquid-glass p-8 rounded-3xl space-y-5 text-left font-sans relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.04] transition-all duration-500" />
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <Users className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">I. Trải nghiệm & Cảm nhận cá nhân</h4>
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Hành trình thay đổi tư duy làm việc số</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm sm:text-base leading-relaxed italic text-slate-200">
                  <p className="pl-4 border-l-2 border-white/20">
                    "Là một sinh viên chuyên ngành Vật lý kỹ thuật, trước đây tôi thường nghĩ môn học này chỉ dừng lại ở các kỹ năng soạn thảo văn bản hay làm slide thuyết trình đơn giản. Tuy nhiên, sau khi đi qua toàn bộ lộ trình, tôi thực sự bất ngờ về sự thay đổi trong tư duy học tập số của bản thân. Cảm giác tự tay sắp xếp hệ thống thư mục khoa học, thiết lập bộ nguyên tắc tương tác AI học đường và tự mình xây dựng trang Portfolio cá nhân này mang lại cho tôi niềm vui và sự tự tin lớn. Môn học đã giúp tôi phá bỏ giới hạn của những công cụ văn phòng thông thường, biến chúng thành phương tiện mạnh mẽ để tối ưu hóa việc quản lý dữ liệu nghiên cứu thực nghiệm hàng ngày."
                  </p>
                </div>
              </div>

              {/* Card 2: Reflection on Bài 1-3 */}
              <div className="liquid-glass p-8 rounded-3xl space-y-5 text-left font-sans relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.04] transition-all duration-500" />
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <Edit3 className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">II. Quản trị tri thức số & Xây dựng nền tảng</h4>
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Hệ thống hóa học tập cá nhân (Bài 1, 2, 3)</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200">
                  <p className="text-[13px]">
                    Giai đoạn đầu của chương trình học giúp tôi chuẩn hóa toàn bộ không gian học tập số và phương pháp nghiên cứu tài liệu khoa học. Bắt đầu với <strong className="text-white">Bài 1</strong>, việc xây dựng cấu trúc thư mục phân cấp chuẩn và quy chuẩn đặt tên tệp logic theo định dạng <code className="font-mono text-white bg-white/5 px-1.5 py-0.5 rounded border border-white/10">kebab-case</code> giúp các file tệp bài giảng, mã mô phỏng hay số liệu Vật lý của tôi luôn ngăn nắp. Ở <strong className="text-white">Bài 2</strong>, bộ lọc đánh giá nguồn tin <strong className="text-white">CRAAP</strong> và các toán tử logic rèn luyện cho tôi tư duy phản biện khi khai thác các bài báo khoa học uy tín, biết cách đối chiếu độ tin cậy và chuẩn hóa danh mục tài liệu tham khảo chuẩn <strong className="text-white">Harvard</strong>. Đến <strong className="text-white">Bài 3</strong>, các kỹ năng soạn thảo nâng cao đã giúp tôi tự động hóa hoàn toàn việc dàn trang báo cáo học thuật lớn một cách chuyên nghiệp.
                  </p>
                </div>
              </div>

              {/* Card 3: Reflection on Bài 4-6 */}
              <div className="liquid-glass p-8 rounded-3xl space-y-5 text-left font-sans relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.04] transition-all duration-500" />
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <BrainCircuit className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">III. Cộng tác nhóm, Trực quan hóa & Làm chủ AI tạo sinh</h4>
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Hợp tác hiệu quả và tư duy công nghệ có trách nhiệm (Bài 4, 5, 6)</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200">
                  <p>
                    Bước sang giai đoạn hai ở <strong className="text-white">Bài 4</strong>, tôi được trang bị kỹ năng làm việc nhóm hiệu quả thông qua việc lập kế hoạch tiến độ trên Trello và đồng biên soạn báo cáo trên Google Docs, đồng thời học được cách trực quan hóa dữ liệu qua các biểu đồ Excel và thiết kế PowerPoint tối giản.
                  </p>
                  <p>
                    Đặc biệt, việc ứng dụng AI tạo sinh (Gemini/ChatGPT) ở <strong className="text-white">Bài 5</strong> và <strong className="text-white">Bài 6</strong> giúp tôi làm chủ kỹ nghệ viết Prompt chuyên nghiệp (như quy tắc CRISP hay Role-prompting) để phục vụ dịch thuật và lên dàn ý nội dung. Đối mặt với hiện tượng AI ảo tưởng thông tin khi viết bài blog về rác thải nhựa, tôi nhận ra tầm quan trọng của việc tự mình đối chiếu nguồn thực tế và rà soát chính sách học đường để bảo vệ tính liêm chính và tư duy phản biện độc lập của bản thân.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Skills (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Competency Pillars Grid */}
              <div className="liquid-glass p-6 rounded-3xl text-left space-y-5 relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <BrainCircuit className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white uppercase tracking-wider">Khung Năng Lực Số</h4>
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">6 Trụ cột phát triển cốt lõi</span>
                  </div>
                </div>

                <div className="space-y-5 font-sans text-sm">
                  <div className="flex gap-3 hover:bg-white/[0.02] p-2 rounded-xl transition-colors">
                    <div className="text-muted-foreground mt-0.5"><FolderTree className="w-4 h-4 text-white/60" /></div>
                    <div>
                      <strong className="text-white block font-medium">1. Cấu trúc dữ liệu & Quản trị (Bài 1)</strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">Xây dựng kiến trúc thư mục chuẩn và hệ thống hóa tệp tin chuyên nghiệp.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 hover:bg-white/[0.02] p-2 rounded-xl transition-colors">
                    <div className="text-muted-foreground mt-0.5"><Search className="w-4 h-4 text-white/60" /></div>
                    <div>
                      <strong className="text-white block font-medium">2. Thẩm định học thuật CRAAP (Bài 2)</strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">Đánh giá nguồn tin chuyên sâu, lọc nhiễu thông tin và trích dẫn Harvard.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 hover:bg-white/[0.02] p-2 rounded-xl transition-colors">
                    <div className="text-muted-foreground mt-0.5"><FileText className="w-4 h-4 text-white/60" /></div>
                    <div>
                      <strong className="text-white block font-medium">3. Biên soạn & Tự động hóa (Bài 3)</strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">Định dạng văn bản học thuật lớn, tự động hóa mục lục và kiểm soát bố cục.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 hover:bg-white/[0.02] p-2 rounded-xl transition-colors">
                    <div className="text-muted-foreground mt-0.5 font-semibold text-xs text-white/60">📊</div>
                    <div>
                      <strong className="text-white block font-medium">4. Trực quan hóa dữ liệu (Bài 4)</strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">Mô hình hóa số liệu nâng cao thông qua Excel và trình diễn slide tối giản.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 hover:bg-white/[0.02] p-2 rounded-xl transition-colors">
                    <div className="text-muted-foreground mt-0.5"><MessageSquareCode className="w-4 h-4 text-white/60" /></div>
                    <div>
                      <strong className="text-white block font-medium">5. Đồng kiến tạo Người - AI (Bài 5)</strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">Quy trình lặp Prompt Engineering, phối hợp dịch thuật và biên tập thủ công.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 hover:bg-white/[0.02] p-2 rounded-xl transition-colors">
                    <div className="text-muted-foreground mt-0.5"><ShieldAlert className="w-4 h-4 text-white/60" /></div>
                    <div>
                      <strong className="text-white block font-medium">6. Học thuật Liêm chính & Đạo đức (Bài 6)</strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">Thiết lập bộ quy tắc cá nhân, rà soát chính sách đạo đức AI học đường.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 border-t border-white/5 text-center text-sm text-slate-400 font-mono">
        <p>© 2026 Nguyễn Doãn Minh Hiếu (25020930). Thiết kế cho môn học Nhập môn công nghệ số.</p>
      </footer>
    </div>
  )
}

export default App
