import { z } from "zod";

const importCustomsDeclarationSchema = z.object({
  shipmentId: z.string().uuid(),
  type: z.literal("CUSTOM_IMPORT"),
  docNumber: z.string(),
  fields: z.object({
    chiCucHaiQuanDangKy: z.string(),
    chiCucHaiQuanCuaKhauNhap: z.string(),
    soThamChieu: z.string(),
    ngayGioGui: z.string(),
    soToKhai: z.string(),
    ngayGioDangKy: z.string(),
    soLuongPhuLuc: z.string(),
    congChucDangKy: z.string(),
    nguoiXuatKhau: z.string(),
    nguoiNhapKhau: z.string(),
    mstNhapKhau: z.string(),
    nguoiUyThac: z.string(),
    mstUyThac: z.string(),
    daiLyHaiQuan: z.string(),
    mstDaiLy: z.string(),
    loaiHinh: z.string(),
    hoaDonThuongMai: z.string(),
    giayPhepSo: z.string(),
    giayPhepNgay: z.string(),
    giayPhepHetHan: z.string(),
    hopDong: z.string().uuid(),
    hopDongNgay: z.string(),
    hopDongHetHan: z.string(),
    vanDon: z.string(),
    cangXepHang: z.string(),
    cangDoHang: z.string(),
    phuongTienVanTai: z.string(),
    tenSoHieu: z.string(),
    ngayDen: z.string(),
    nuocXuatKhau: z.string(),
    dieuKienGiaoHang: z.string(),
    phuongThucThanhToan: z.string(),
    dongTienThanhToan: z.string(),
    tyGiaTinhThue: z.string(),
    productRows: z.array(
      z.object({
        id: z.number(),
        moTa: z.string(),
        maSo: z.string(),
        xuatXu: z.string(),
        uuDai: z.string(),
        luongHang: z.string(),
        donVi: z.string(),
        donGia: z.string(),
        triGia: z.string(),
      }),
    ),
    containerRows: z.array(
      z.object({
        id: z.number(),
        soHieu: z.string(),
        soLuongKien: z.string(),
        trongLuong: z.string(),
      }),
    ),
  }),
});

export default importCustomsDeclarationSchema;
export type importCustomsDeclarationData = z.infer<
  typeof importCustomsDeclarationSchema
>;
