import { TbSquareArrowDown } from "react-icons/tb";
import imgCR7 from "../assets/cr7.jpg";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const EnrollmentPage = () => {
  const [semester, setSemsester] = useState("HK2 (2023-2024)");

  return (
    <div className="w-screen h-screen font-roboto overflow-y-auto">
      <div className="flex justify-center items-center h-[12%] w-screen border shadow-lg shadow-[#e4eff5] bg-white ">
        <div className="flex">
          <img
            src="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-iuh-inkythuatso-01-08-11-18-25.jpg"
            alt="iuh logo"
            className="w-[150px]"
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-extrabold text-[#08387f]">
              TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM
            </h1>
            <h1 className="text-xl font-extrabold text-[#920000]">
              CỔNG ĐĂNG KÍ HỌC PHẦN SINH VIÊN
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center w-screen border bg-white w-[90%] ml-20 mr-20">
        <div className="flex w-60 flex-col bg-sky-500 text-white p-2 pl-7 pr-7">
          <p>Xin chào!</p>
          <p className="text-lg font-semibold">Nguyễn Văn Lộc</p>
          <div className="flex justify-between">
            <p>Giới tính:</p>
            <p>Nam</p>
          </div>
          <div className="flex justify-between">
            <p>MSSV:</p>
            <p>123456</p>
          </div>
          <div className="flex justify-between">
            <p>Trạng thái:</p>
            <p>Đang học</p>
          </div>

          <button className="bg-amber-500 mt-2 pr-3 pl-3 p-1">Đăng xuất</button>
        </div>
        <div className="flex">
          <div
            style={{ width: "200px", height: "auto" }}
            className="flex items-center justify-center"
          >
            <img src={imgCR7} alt="cr7" />
          </div>

          <div className="flex flex-col justify-center ml-2 text-sky-500">
            <a href="">THÔNG TIN SINH VIÊN</a>
            <a href="">ĐĂNG KÍ HỌC PHẦN</a>
            <a href="">CHƯƠNG TRÌNH KHUNG</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center border w-[90%] ml-20 mr-20">
        <p className="text-2xl font-bold text-sky-700 mt-2">ĐĂNG KÍ HỌC PHẦN</p>
        <div className="flex items-center mt-5">
          <p className="text-base font-semibold ">Đợt đăng kí: </p>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center ml-2 pl-2 pr-2 border border-gray-500 rounded"
            >
              {semester}
              <IoMdArrowDropdown className="ml-2" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow border border-gray-400 bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => setSemsester("HK2 (2023-2024)")}
                  className={semester === "HK2 (2023-2024)" ? "bg-sky-400" : ""}
                >
                  HK2 (2023-2024)
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSemsester("HK1 (2023-2024)")}
                  className={semester === "HK1 (2023-2024)" ? "bg-sky-400" : ""}
                >
                  HK1 (2023-2024)
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSemsester("HK2 (2022-2023)")}
                  className={semester === "HK2 (2022-2023)" ? "bg-sky-400" : ""}
                >
                  HK2 (2022-2023)
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSemsester("HK1 (2022-2023)")}
                  className={semester === "HK1 (2022-2023" ? "bg-sky-400" : ""}
                >
                  HK1 (2022-2023)
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSemsester("HK2 (2021-2022)")}
                  className={semester === "HK2 (2021-2022)" ? "bg-sky-400" : ""}
                >
                  HK2 (2021-2022)
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSemsester("HK1 (2021-2022)")}
                  className={semester === "HK1 (2021-2022)" ? "bg-sky-400" : ""}
                >
                  HK1 (2021-2022)
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSemsester("HK2 (2020-2021)")}
                  className={semester === "HK2 (2020-2021)" ? "bg-sky-400" : ""}
                >
                  HK2 (2020-2021)
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSemsester("HK1 (2020-2021)")}
                  className={semester === "HK1 (2020-2021)" ? "bg-sky-400" : ""}
                >
                  HK1 (2020-2021)
                </a>
              </li>
            </ul>
          </div>
          <input
            type="radio"
            name="radio-4"
            className="radio radio-accent ml-3"
            checked
          />
          <p className="text-red-700 font-bold">HỌC MỚI</p>
          <input
            type="radio"
            name="radio-4"
            className="radio radio-accent ml-3"
          />
          <p className="text-red-700 font-bold">HỌC LẠI</p>
          <input
            type="radio"
            name="radio-4"
            className="radio radio-accent ml-3"
          />
          <p className="text-red-700 font-bold">HỌC CẢI THIỆN</p>
        </div>
        <p className="text-lg font-bold text-orange-500 mt-5">
          MÔN HỌC PHẦN CHỜ ĐĂNG KÍ
        </p>
        <div className="overflow-x-auto mt-3">
          <table className="table border-collapse border border-blue-300">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-blue-300"></th>
                <th className="border border-blue-300">STT</th>
                <th className="border border-blue-300">Mã HP</th>
                <th className="border border-blue-300">Tên môn học</th>
                <th className="border border-blue-300">TC</th>
                <th className="border border-blue-300">Bắt buộc</th>
                <th className="border border-blue-300">
                  Học phần: học trước (a), tiên quyết (b), song hành (c)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-blue-300">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox border border-gray-400"
                    />
                  </label>
                </th>
                <td className="border border-blue-300">1</td>
                <td className="border border-blue-300">123</td>
                <td className="border border-blue-300">Toán ứng dụng</td>
                <th className="border border-blue-300">3</th>
                <td className="border border-blue-300">
                  <div className="flex items-center justify-center">
                    <IoCloseCircle color="red" size={20} />
                  </div>
                </td>
                <td className="border border-blue-300">
                  <div className="flex items-center justify-center">
                    234 <p className="text-red-600 font-bold">(a)</p>
                  </div>
                </td>
              </tr>

              <tr>
                <th className="border border-blue-300">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox border border-gray-400"
                    />
                  </label>
                </th>
                <td className="border border-blue-300">2</td>
                <td className="border border-blue-300">223</td>
                <td className="border border-blue-300">Vật lí đại cương</td>
                <th className="border border-blue-300">3</th>
                <td className="border border-blue-300">
                  <div className="flex items-center justify-center">
                    <IoCloseCircle color="red" size={20} />
                  </div>
                </td>
                <td className="border border-blue-300">
                  <div className="flex items-center justify-center"></div>
                </td>
              </tr>

              <tr>
                <th className="border border-blue-300">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox border border-gray-400"
                    />
                  </label>
                </th>
                <td className="border border-blue-300">3</td>
                <td className="border border-blue-300">523</td>
                <td className="border border-blue-300">Giao tiếp kinh doanh</td>
                <th className="border border-blue-300">3</th>
                <td className="border border-blue-300">
                  <div className="flex items-center justify-center">
                    <IoCloseCircle color="red" size={20} />
                  </div>
                </td>
                <td className="border border-blue-300">
                  <div className="flex items-center justify-center">
                    234 <p className="text-red-600 font-bold">(a)</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center mt-5">
          <p className="text-lg font-bold text-orange-500 ">
            LỚP HỌC PHẦN CHỜ ĐĂNG KÍ
          </p>

          <label className="flex ml-3">
            <input
              type="checkbox"
              className="checkbox border border-gray-400 mr-2"
            />
            <p className="text-red-600 font-bold">
              HIỂN THỊ LỚP HỌC PHẦN KHÔNG TRÙNG LỊCH
            </p>
          </label>
        </div>

        <div className="overflow-x-auto mt-3">
          <table className="table border-collapse border border-blue-300">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-blue-300">STT</th>
                <th className="border border-blue-300">Mã LHP</th>
                <th className="border border-blue-300">Tên lớp học phần</th>
                <th className="border border-blue-300">Lớp dự kiến</th>
                <th className="border border-blue-300">Sỉ số tối đa</th>
                <th className="border border-blue-300">Đã đăng kí</th>
                <th className="border border-blue-300">Trạng thái</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <p className="text-lg font-bold text-orange-500 mt-5">
          CHI TIẾT LỚP HỌC PHẦN
        </p>

        <div className="flex items-center  mt-7">
          <p className="mr-2">Nhóm thực hành</p>
          <div className="flex border border-gray-400 rounded items-center  ">
            <input type="text" className="pl-2 focus:outline-none w-40" />
            <IoMdArrowDropdown />
          </div>
          <button className="bg-amber-500 ml-3 pr-3 pl-3 text-white">
            Xem lịch trùng
          </button>
        </div>

        <div className="overflow-x-auto mt-3">
          <table className="table border-collapse border border-blue-300">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-blue-300">STT</th>
                <th className="border border-blue-300">Lịch học</th>
                <th className="border border-blue-300">Nhóm thực hành</th>
                <th className="border border-blue-300">Phòng</th>
                <th className="border border-blue-300">Dãy nhà</th>
                <th className="border border-blue-300">Cơ sở</th>
                <th className="border border-blue-300">Giảng viên</th>
                <th className="border border-blue-300">Thời gian</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="flex items-center justify-center">
            <button className=" bg-amber-500 mt-7 pr-3 pl-3 p-1 text-white">
              Đăng kí môn học
            </button>
          </div>
        </div>

        <p className="text-lg font-bold text-orange-500 mt-5">
          LỚP HỌC PHẦN ĐÃ ĐĂNG KÍ TRONG HỌC KÌ NÀY
        </p>

        <div className="overflow-x-auto mt-3">
          <table className="table border-collapse border border-blue-300">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-blue-300">Thao tác</th>
                <th className="border border-blue-300">STT</th>
                <th className="border border-blue-300">Mã LHP</th>
                <th className="border border-blue-300">Tên môn học</th>
                <th className="border border-blue-300">Lớp học dự kiến</th>
                <th className="border border-blue-300">Số TC</th>
                <th className="border border-blue-300">Nhóm TH</th>
                <th className="border border-blue-300">Học phí</th>
                <th className="border border-blue-300">Hạn nộp</th>
                <th className="border border-blue-300">Thu</th>
                <th className="border border-blue-300">Trạng thái ĐK</th>
                <th className="border border-blue-300">Ngày ĐK</th>
                <th className="border border-blue-300">Trạng thái LHP</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col bg-blue-500 mt-2 pt-2 pb-2 text-white items-center justify-center w-[90%] ml-20 mr-20">
        <p>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.Hồ Chí Minh</p>
        <p>
          Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP. Hồ Chí Minh
        </p>
        <p>Điện thoại: 0283 8940 390</p>
        <p>Fax: 0283 9940 954</p>
        <p>Email: dhcn@iuh.edu.vn</p>
      </div>

      <div className="flex flex-col bg-sky-400 pt-2 pb-2 text-white items-center justify-center w-[90%] ml-20 mr-20">
        Bản quyền 2018 - Trường Đại học Công nghiep TP. Hồ Chí Minh
      </div>
    </div>
  );
};

export default EnrollmentPage;
