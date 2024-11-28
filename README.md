# My React Native Template

Bộ mã nguồn chuẩn của dự án mới

## Cấu trúc thư mục
```
project-name/
├── src/
│   ├── assets/            # Tài nguyên tĩnh (hình ảnh, phông chữ,...)
│   ├── components/        # Các thành phần UI dùng chung
│   ├── config/            # Cấu hình ứng dụng
│   ├── navigation/        # Cấu trúc điều hướng ứng dụng
│   ├── screens/           # Các màn hình của ứng dụng
│   ├── services/          # Xử lý API, logic nghiệp vụ
│   ├── store/             # Quản lý trạng thái (Redux, MobX,...)
│   ├── styles/            # Các stylesheet chung
│   ├── types/             # Định nghĩa kiểu dữ liệu (TypeScript)
│   ├── utils/             # Các hàm tiện ích
│   └── App.tsx            # Điểm vào chính của ứng dụng
├── .env                   # Biến môi trường
├── .eslintrc.js           # Cấu hình ESLint
├── .prettierrc.js        # Cấu hình Prettier
├── babel.config.js        # Cấu hình Babel
├── index.js               # Điểm vào của Metro bundler
├── metro.config.js        # Cấu hình Metro bundler
├── package.json           # Thông tin dự án, dependencies
└── README.md             # Tài liệu hướng dẫn dự án
```
## Công nghệ sử dụng

* React Native
* TypeScript (hoặc JavaScript)
* React Navigation (hoặc thư viện điều hướng khác)
* Redux (hoặc MobX, Context API,...)
* ... (Các thư viện và công cụ khác)

## Cài đặt và chạy dự án

1. Clone dự án: `git clone <URL dự án>`
2. Cài đặt dependencies: `npm install` hoặc `yarn install`
3. Chạy Metro Bundler: `npx react-native start`
4. Chạy ứng dụng trên thiết bị iOS: `npx react-native run-ios`
5. Chạy ứng dụng trên thiết bị Android: `npx react-native run-android`

## Quy ước đặt tên và Coding Conventions

### Quy ước chung:

* **Sử dụng tiếng Anh:** Tất cả tên biến, hàm, component, ... phải được viết bằng tiếng Anh.
* **Tránh viết tắt:** Trừ những từ viết tắt đã được chấp nhận rộng rãi (như `id`, `URL`, `API`), nên tránh sử dụng từ viết tắt.
* **Phân biệt chữ hoa chữ thường:** JavaScript phân biệt chữ hoa chữ thường, vì vậy hãy cẩn thận khi đặt tên.

### Quy ước đặt tên biến:

* **`camelCase`:** Sử dụng camelCase cho tên biến (ví dụ: `firstName`, `isValid`).
* **Tên có ý nghĩa:** Chọn tên biến mô tả rõ ràng mục đích của biến đó.
* **Hằng số:** Sử dụng chữ IN HOA và dấu gạch dưới để phân tách các từ cho hằng số (ví dụ: `API_URL`, `MAX_LENGTH`).

### Quy ước đặt tên hàm:

* **`camelCase`:** Sử dụng camelCase cho tên hàm (ví dụ: `calculateTotal`, `fetchData`).
* **Động từ làm tiền tố:** Bắt đầu tên hàm bằng một động từ mô tả hành động mà hàm thực hiện (ví dụ: `get`, `set`, `update`).

### Quy ước đặt tên component:

* **`PascalCase`:** Sử dụng PascalCase cho tên component (ví dụ: `Button`, `Input`, `UserProfile`).
* **Tên theo chức năng:** Đặt tên component theo chức năng mà nó đảm nhiệm (ví dụ: `LoginForm`, `ProductCard`).
* **Component con:** Đặt tên component con theo cấu trúc `ParentComponentName.ChildComponentName` (ví dụ: `UserProfile.Avatar`).

### Quy ước đặt tên file:

* **`.jsx`, `.tsx`:** Sử dụng phần mở rộng `.jsx` cho các component React viết bằng JavaScript và `.tsx` cho các component viết bằng TypeScript.
* **`PascalCase`:** Sử dụng PascalCase cho tên file component (ví dụ: `Button.tsx`, `Input.jsx`).
* **Tên theo chức năng:** Đặt tên file theo chức năng của component (ví dụ: `LoginForm.tsx`, `ProductCard.jsx`).
* **File khác:** Sử dụng `camelCase` hoặc `kebab-case` cho các file khác (ví dụ: `api.js`, `utils.ts`, `theme.css`).

### Quy ước đặt tên thư mục:

* **`kebab-case`:** Sử dụng kebab-case cho tên thư mục (ví dụ: `components`, `screens`, `utils`).
* **Tên theo chức năng:** Đặt tên thư mục theo chức năng của các thành phần bên trong (ví dụ: `navigation`, `assets`, `config`).

### Công cụ hỗ trợ:

* **ESLint:** Sử dụng ESLint để kiểm tra và đảm bảo code tuân thủ các quy ước đặt tên và các quy tắc coding conventions khác.
* **Prettier:** Sử dụng Prettier để tự động định dạng code theo quy ước đã thống nhất.

## Liên hệ

Thông tin liên hệ
Email: dophuchoa1997vn@gmail.com