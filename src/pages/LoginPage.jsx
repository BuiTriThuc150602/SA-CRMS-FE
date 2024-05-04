const LoginPage = () => {
  return (
    <div className="w-screen h-screen font-roboto ">
      <div className="flex justify-center items-center h-[10%] w-screen border shadow-lg shadow-[#e4eff5] bg-white">
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
              CỔNG THÔNG TIN SINH VIÊN
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-[90%]">
        <div className="flex flex-col w-3/5 p-5 rounded-md shadow-lg">
          <div className="mt-5 mb-2">
            <h1 className="text-3xl font-bold mb-3 ">Thông Tin Giờ Học</h1>
            <p className="text-gray-500">Cập nhật lần cuối : 22/10/2020</p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="./timeline.png"
              alt="iuh time line"
              className="object-contain"
            />
          </div>
        </div>
        <div className="w-2/5 flex justify-center items-center">
          <div className="flex flex-col items-center border w-[80%] h-[90%] p-3 rounded-xl shadow-2xl">
            <div className="mt-5 flex flex-col items-center">
              <p className="text-3xl font-bold mb-3 text-[#08387f] text-center">
                CỔNG THÔNG TIN SINH VIÊN
              </p>
              <p className="text-2xl font-bold mb-3  text-[#920000] text-center">
                ĐĂNG NHẬP HỆ THỐNG
              </p>
            </div>
            <form className="flex flex-col w-full h-full">
              <div className="flex flex-col mb-5 shadow-lg rounded-md w-full h-[60%] justify-center items-center">
                <input
                  type="text"
                  placeholder="Mã Sinh Viên"
                  className="input input-bordered mb-5 w-[80%]"
                />
                <input
                  type="password"
                  placeholder="Mật Khẩu"
                  className="input input-bordered mb-5 w-[80%]"
                />
              </div>
                <button className="btn btn-primary text-white text-lg font-semibold p-2 rounded-md shadow-lg w-full">
                  Đăng Nhập
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
