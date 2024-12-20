import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CustomerForwarderContractModal() {
    const [formData, setFormData] = useState({
        documentNumber: "",
        location: "",
        nameA: "",
        addressA:"",
        phoneA:"",
        accountA:"",
        bankA:"",
        representA:"",
        positionA:"",
        position_signA:"",
        authorNumberA:"",
        nameB:"",
        addressB:"",
        phoneB:"",
        telexB:"",
        faxB:"",
        accountB:"",
        bankB:"",
        representB:"",
        positionB:"",
        position_signB:"",
        authorNumberB:"",
        total:"",
        vnd:"",
        foreign:"",
        time:"",
        date:"",
        author_dateA:"",
        author_dateB:"",
        export_date:"",
        transport_date:"",
        shipment_day:"",
        valid_date:"",
        item1:"",
        item2:"",
        item3:"",
        price1:"",
        price2:"",
        price3:"",
        price4:"",
        method:"",
        area:"",
        rate:"",
        rate1:"",
        version:"",
        version1:"",
        address:"",
        bank:"",
        place:"",
        signA:"",
        signB:"",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const formattedData = {
            id: "",
            type: "CUSTOMER_CONTRACT",
            fields: {
                A: {
                    name: formData.nameA,
                    address: formData.addressA,
                    phone: formData.phoneA,
                    account: formData.accountA,
                    bank: formData.bankA,
                    represent: formData.representA,
                    position: formData.positionA,
                    authorNumber: formData.authorNumberA,
                    signature: {
                        signed: formData.signA,
                    }
                },
                B: {
                    name: formData.nameB,
                    address: formData.addressB,
                    phone: formData.phoneB,
                    telex: formData.telexB,
                    fax: formData.faxB,
                    account: formData.accountB,
                    bank: formData.bankB,
                    represent: formData.representB,
                    position: formData.positionB,
                    authorNumber: formData.authorNumberB,
                    signature: {
                        signed: formData.signB,
                    }
                },
                contract: {
                    documentNumber: formData.documentNumber,
                    location: formData.location,
                    payment: {
                        total: formData.total,
                        vnd: formData.vnd,
                        foreign: formData.foreign,
                        price1: formData.price1,
                        price2: formData.price2,
                        price3: formData.price3,
                        price4: formData.price4,
                    },
                    contractDate: formData.date,
                    authorDateA: formData.author_dateA,
                    authorDateB: formData.author_dateB,
                    exportDate: formData.export_date,
                    transportDate: formData.transport_date,
                    shipmentDay: formData.shipment_day,
                    validDate: formData.valid_date,
                    time: formData.time,
                    firstItem: formData.item1,
                    secondItem: formData.item2,
                    thirdItem: formData.item3,
                    paymentMethod: formData.method,
                    area: formData.area,
                    overdueRate: formData.rate,
                    penaltyRate: formData.rate1,
                    version: formData.version,
                    eachVersion: formData.version1,
                    deliveryAddress: formData.address,
                    paymentBank: formData.bank,
                    place: formData.place,
                }
            }
        };
        console.log("Formatted Data:", formattedData);
    };
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="btn btn-primary">View</button>
            </DialogTrigger>
            <DialogContent className="max-w-[50vw] w-full h-[90vh] overflow-y-auto rounded-lg p-6 shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-center">
                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM <br />
                        <span className="font-bold">Độc lập - Tự do - Hạnh phúc</span><br></br>
                        <span className="font-bold">__________________</span><br></br>
                        <span className="font-bold text-xl mt-4 block">HỢP ĐỒNG ỦY THÁC XUẤT KHẨU</span><br></br>
                    </DialogTitle>
                    <div className="mt-1">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="flex items-center justify-center">
                            <span className="mr-2">Số:</span>
                            <input
                                name="documentNumber"
                                className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center items-end"
                                value={formData.documentNumber}
                                onChange={handleInputChange}      
                            />
                            <span className="ml-2">/HĐKTXK</span>
                        </div>
                        <div className="flex flex-wrap items-end mt-1">
                        <span className="mr-1">Hôm nay, ngày</span>
                        <input
                            name="date"
                            className="border-dotted border-b-2 py-1 outline-none text-center"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="flex flex-wrap items-end mt-1">
                        <span className="mr-1">Tại</span>
                        <input
                            name="location"
                            className="border-dotted border-b-2 w-1/10 py-1 outline-none text-center"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Party A */}
                        <h1 className="mt-1">Chúng tôi gồm có:</h1>
                        <div className="flex items-end w-full">
                        <span className="font-bold mr-2">Bên A (Bên ủy thác)</span>
                        </div>
                        {/* Name A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Tên doanh nghiệp: (hoặc cơ quan) </span>
                        <input
                            name="nameA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.nameA}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Address A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Địa chỉ trụ sở chính: </span>
                        <input
                            name="addressA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.addressA}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Phone A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Điện thoại: </span>
                        <input
                            name="phoneA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.phoneA}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Account A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Tài khoản: </span>
                        <input
                            name="accountA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.accountA}
                            onChange={handleInputChange}
                        />
                        <span className="font-normal mr-2">tại Ngân hàng</span>
                        <input
                            name="bankA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.bankA}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Represent A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Đại diện là Ông (Bà): </span>
                        <input
                            name="representA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.representA}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Position A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Chức vụ: </span>
                        <input
                            name="positionA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.positionA}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Authorization letter number A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Giấy ủy quyền số: </span>
                        <input
                            name="authorNumberA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.authorNumberA}
                            onChange={handleInputChange}
                        />
                        <span className="mr-1">Viết ngày</span>
                        <input
                            name="author_dateA"
                            className="border-dotted border-b-2 py-1 outline-none text-center"
                            value={formData.author_dateA}
                            onChange={handleInputChange}
                        />
                        </div>
                         {/* Position Sign A */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Do chức vụ</span>
                        <input
                            name="position_signA"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.position_signA}
                            onChange={handleInputChange}
                        />
                        <span>Ký</span>
                        </div>
                        {/* Party B */}
                        <div className="flex items-end w-full">
                        <span className="font-bold mr-2">Bên B (Bên nhận ủy thác)</span>
                        </div>
                        {/* Name B */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Tên doanh nghiệp: (hoặc cơ quan) </span>
                        <input
                            name="nameB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.nameB}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Address B */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Địa chỉ trụ sở chính: </span>
                        <input
                            name="addressB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.addressB}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Phone B */}
                        <div className="flex flex-wrap items-end w-full">
                        <span className="font-normal mr-2">Điện thoại: </span>
                        <input
                            name="phoneB"
                            className="border-dotted border-b-2 w-1/10 py-1 outline-none text-center"
                            value={formData.phoneB}
                            onChange={handleInputChange}
                        />
                        <span className="font-normal mr-2">Telex</span>
                        <input
                            name="telexB"
                            className="border-dotted border-b-2 w-1/10 py-1 outline-none text-center"
                            value={formData.telexB}
                            onChange={handleInputChange}
                        />
                        <span className="font-normal mr-2">Fax</span>
                        <input
                            name="faxB"
                            className="border-dotted border-b-2 w-1/10 py-1 outline-none text-center"
                            value={formData.faxB}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Account B */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Tài khoản: </span>
                        <input
                            name="accountB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.accountB}
                            onChange={handleInputChange}
                        />
                        <span className="font-normal mr-2">tại Ngân hàng</span>
                        <input
                            name="bankB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.bankB}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Represent B */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Đại diện là Ông (Bà): </span>
                        <input
                            name="representB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.representB}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Position B */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Chức vụ: </span>
                        <input
                            name="positionB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.positionB}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Authorization letter number B */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Giấy ủy quyền số: </span>
                        <input
                            name="authorNumberB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.authorNumberB}
                            onChange={handleInputChange}
                        />
                        <span className="mr-1">Viết ngày</span>
                        <input
                            name="author_dateB"
                            className="border-dotted border-b-2 py-1 outline-none text-center"
                            value={formData.author_dateB}
                            onChange={handleInputChange}
                        />
                        </div>
                         {/* Position Sign B */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Do chức vụ</span>
                        <input
                            name="position_signB"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.position_signB}
                            onChange={handleInputChange}
                        />
                        <span>Ký</span>
                        </div>
                        <h1 className="mt-1"> Hai bên thỏa thuận và cùng ký kết hợp đồng với các điều khoản như sau:</h1>
                        <h2 className="font-bold mt-1">Điều 1: Nội dung</h2>
                        <h1 className="mt-1"> 1. Bên A ủy thác cho bên B thực hiện xuất khẩu những hàng hóa sau:</h1>
                        {/* Table */}
                        <div className="overflow-x-auto">
                        <table className="table-auto border-collapse border border-black w-full text-center">
                            <thead>
                            <tr>
                                <th className="border border-black" rowSpan={4}>STT</th>
                                <th className="border border-black" rowSpan={4}>Tên hàng</th>
                                <th className="border border-black" rowSpan={4}>Đơn vị tính</th>
                                <th className="border border-black" rowSpan={4}>Số lượng</th>
                                <th className="border border-black" rowSpan={4}>Đơn giá</th>
                                <th className="border border-black" rowSpan={4}>Thành tiền</th>
                                <th className="border border-black" rowSpan={4}>Ghi chú</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border border-black" style={{ height: "30px" }}>&nbsp;1</td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                            </tr>
                            <tr>
                                <td className="border border-black" style={{ height: "30px" }}>&nbsp;2</td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                            </tr>
                            <tr>
                                <td className="border border-black" style={{ height: "30px" }}>&nbsp;...</td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                                <td className="border border-black"> </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        {/* Total */}
                         <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Cộng</span>
                        <input
                            name="total"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.total}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* VND */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">2. Tổng giá trị hàng hóa (tính theo tiền Việt Nam):</span>
                        <input
                            name="vnd"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.vnd}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Foreign */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">3. Tổng giá trị hàng hóa (tính theo ngoại tệ):</span>
                        <input
                            name="foreign"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.foreign}
                            onChange={handleInputChange}
                        />
                        </div>
                        <h2 className="font-bold mt-1">Điều 2: Quy cách, chất lương của hàng hóa</h2>
                        <h1 className="mt-1">1. Bên B có trách nhiệm hướng dẫn cho bên A về tiêu chuẩn, chất lượng hàng hóa, kiểm dịch, bao bì, cách chọn mẫu để chào hàng...ngay từ khi sản xuất, chế biến.</h1>
                        <h1 className="mt-1">2. Bên A phải cung cấp cho bên B các tài liệu cần thiết liên quan về quy cách, phẩm chất, mẫu hàng... để chào bán.</h1>
                        <h1 className="mt-1">3. Bên A phải chịu trách nhiệm về chất lượng hàng hóa nếu có sự sai lệch so với nội dung được chào hàng, đồng thời chịu trách nhiệm về số lượng hàng hóa bên trong bao bì trong các kiện hàng hoặc container do bên A đóng hàng, khi hàng đến tay bên ngoài.</h1>
                        <h2 className="font-bold mt-1">Điều 3: Quyền sở hữu hàng xuất khẩu</h2>
                        <h1 className="mt-1">1. Hàng hóa được ủy thác xuất khẩu là tài sản thuộc sở hữu của bên A cho đến khi hàng hóa này được bên A chuyển quyền sở hữu cho bên nước ngoài. Trong bất kỳ giai đoạn nào, bên B cũng không có quyền sở hữu số hàng hóa ủy thác này.</h1>
                        <h1 className="mt-1">2. Bên B phải tạo điều kiện cho bên A được tham gia giao dịch, đàm phán với bên nước ngoài về việc chào bán hàng hóa của mình.</h1>
                        <div className="flex flex-wrap items-end mt-1">
                        <span className="mt-1">3. Mỗi lô hàng bên A cam đoan chỉ ủy thác cho bên B là đơn vị có chức năng xuất nhập khẩu</span>
                        <span>tiến hành chào hàng và xuất khẩu từ ngày</span>
                        <input
                            name="export_date"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.export_date}
                            onChange={handleInputChange}
                        />
                        <span>nếu sau đó bên A lại chuyển quyền sở hữu lô hàng này cho đơn vị khác hoặc dùng nó để gán nợ, cầm cố, thế chấp, bảo lãnh tài sản trong các KĐKT khác mà không có sự đồng ý của bên B thì bên A phải hoàn toàn chịu trách nhiệm.</span>
                        </div>
                        <h2 className="font-bold mt-1">Điều 4: Vận chuyển, giao dịch xuất khẩu hàng hóa</h2>
                        <h1 className="mt-1">1. Bên A có trách nhiệm vận chuyển hàng hóa tới địa điểm và thời gian bên B đã hướng dẫn như sau:</h1>
                        {/* Address */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Địa điểm: </span>
                        <input
                            name="address"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        </div>
                        {/* Time */}
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Thời gian: Hàng hóa phải có trước</span>
                        <input
                            name="time"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center"
                            value={formData.time}
                            onChange={handleInputChange}
                        />
                        <span className="mr-1">giờ của ngày</span>
                        <input
                            name="transport_date"
                            className="border-dotted border-b-2 py-1 outline-none text-center"
                            value={formData.transport_date}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="flex flex-wrap items-end mt-1">
                        <span className="mt-1">2. Bên B phải có trách nhiệm khẩn trương giao dịch xuất khẩu hàng hóa trong</span>
                        <input
                            name="shipment_day"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center items-end"
                            value={formData.shipment_day}
                            onChange={handleInputChange}
                        />
                        <span> ngày (kể từ ngày bên A thông báo đã chuẩn bị đủ các yêu cầu về hàng hóa thỏa thuận với bên B). Nếu không giao dịch được trong thời gian này, bên B phải thông báo ngay cho bên A biết để xử lý lô hàng đó.</span>
                        </div>
                        <h1 className="mt-1">3. Bên B có trách nhiệm xuất khẩu hàng hóa với điều kiện có lợi nhất cho bên A (về giá cả, khả năng thanh toán nhanh bằng ngoại tệ...).</h1>
                        <h2 className="font-bold mt-1">Điều 5: Thanh toán tiền bán hàng</h2>
                        <div className="flex items-end w-full">
                        <span className="mt-1">- Bên B có trách nhiệm cung cấp cho ngân hàng</span>
                        <input
                            name="bank"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.bank}
                            onChange={handleInputChange}
                        />
                        </div>
                        <span> tại</span>
                        <input
                            name="place"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.place}
                            onChange={handleInputChange}
                        />
                        <span> các tài liệu cần thiết để tạo lợi nhuận cho bên A nhận được ngoại tệ của bên nước ngoài thanh toán theo cách nhanh chóng nhất.</span>
                        <h1 className="mt-1">- Bên A được quyền sử dụng ngoại tệ đó theo quy định pháp luật, bên B không có quyền trong việc sở hữu số ngoại tệ này.</h1>
                        <h2 className="font-bold mt-1">Điều 6: Giải quyết rủi ro</h2>
                        <h1 className="mt-1">Bên A phải chịu rủi ro trong quá trình ủy thác xuất khẩu lô hàng nếu bên B chứng minh là mình không có lỗi và đã làm đầy đủ tất cả trách nhiệm đòi bồi thường ở bên thứ ba (là phía có lỗi gây rủi ro).</h1>
                        <h1 className="mt-1">Trường hợp này bên thứ ba thực hiện nghĩa vụ bồi thường trực tiếp cho bên A.</h1>
                        <h2 className="font-bold mt-1">Điều 7: Thanh toán chi phí ủy thác</h2>
                        <h1 className="mt-1">1. Bên A phải thanh toán cho bên B chi phí ủy thác theo mức hai bên thỏa thuận.</h1>
                        {/* {Item 1} */}
                        <div className="flex flex-wrap items-end mt-1">
                        <span className="mt-1">Số tiền chi phí ủy thác mặt hàng</span>
                        <input
                            name="item1"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.item1}
                            onChange={handleInputChange}
                        />
                        <span>(thứ nhất) là</span>
                        <input
                            name="price1"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center"
                            value={formData.price1}
                            onChange={handleInputChange}
                        />
                        <span>đồng</span>
                        </div>
                        {/* {Item 2} */}
                        <h1 className="mt-1">-</h1>
                        <input
                            name="item2"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.item2}
                            onChange={handleInputChange}
                        />
                        <span> (thứ hai) là</span>
                        <input
                            name="price2"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center"
                            value={formData.price2}
                            onChange={handleInputChange}
                        />
                        <span>đồng</span>
                        {/* {Item 3} */}
                        <h1 className="mt-1">-</h1>
                        <input
                            name="item3"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.item3}
                            onChange={handleInputChange}
                        />
                        <span> (thứ ba) là</span>
                        <input
                            name="price3"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center"
                            value={formData.price3}
                            onChange={handleInputChange}
                        />
                        <span>đồng</span>
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Tổng chi phí ủy thác là: </span>
                        <input
                            name="price4"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center"
                            value={formData.price4}
                            onChange={handleInputChange}
                        />
                        <span>đồng</span>
                        </div>
                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">1. Thanh toán theo phương thức</span>
                        <input
                            name="method"
                            className="border-dotted border-b-2 flex-1 py-1 outline-none text-center"
                            value={formData.method}
                            onChange={handleInputChange}
                        />
                        </div>
                        <h2 className="font-bold mt-1">Điều 8: Trách nhiệm của các bên trong thực hiện hợp đồng</h2>
                        <h1 className="mt-1">1. Trường hợp hàng hóa bị khiếu nại do sai sót của bên A thì bên A chịu trách nhiệm bồi thường thiệt hại cho bên nước ngoài theo kết quả giải quyết cùng với bên B.</h1>
                        <h1 className="mt-1">2. Bên B có trách nhiệm thực hiện đầy đủ những công việc cần thiết hợp lý để giải quyết những khiếu nại khi bên nước ngoài phát hiện, kể cả trường hợp hàng hóa ủy thác có tổn thất vì gặp rủi ro trên, cũng phải chịu trách nhiệm theo phần lỗi của mình.</h1>
                        
                        <span className="mt-1">3. Khi xác định phần lỗi phải bồi thường thiệt hại vật chất thuộc trách nhiệm của bên A thì bên B có nghĩa vụ gửi những tài liệu pháp lý chứng minh đến ngân hàng ngoại thương khu vực</span>
                        <input
                            name="area"
                            className="border-dotted border-b-2 w-1/10 py-1 outline-none text-center items-end"
                            value={formData.area}
                            onChange={handleInputChange}
                        />
                        <span> để ngân hàng này trích tài khoản của bên A và chi trả bồi thường cho bên nước ngoài, đồng thời bên B phải thông báo cho bên A biết.</span>

                        <h1 className="mt-1">4. Nếu bên B hướng dẫn không cụ thể về hàng hóa, dẫn đến sai yêu cầu mà khách hàng đưa ra, gây thiệt hại cho bên A thì bên B có trách nhiệm bồi thường thiệt hại thực tế đã gây ra cho bên A do hàng hóa không xuất khẩu được.</h1>
                        <h1 className="mt-1">5. Bên A không chấp hành đúng thời gian, địa điểm giao nhận hàng dẫn tới hậu quả bị bên nước ngoài phạt hợp đồng với bên B và phải bồi thường các khoản chi phí khác như là cảng phí, tiền thuê phương tiện vận tải... thì bên A chịu trách nhiệm bồi thường thay cho bên B. Nếu lỗi này do bên B hướng dẫn sai thời gian hay địa điểm giao nhận hàng thì bên B phải chịu bồi thường trực tiếp cho bên nước ngoài.</h1>
                        <div className="flex flex-wrap items-end">
                            <span className="mt-1" style={{ lineHeight: "2" }}> 6. Nếu bên A chậm thanh toán chi phí ủy thác so với thỏa thuận, bên B được áp dụng mức</span>
                            <span className="mt-1">  phạt lãi suất tín dụng quá hạn là</span>
                            <input
                                name="rate"
                                className="border-dotted border-b-2 w-12 py-1 outline-none text-center"
                                value={formData.rate}
                                onChange={handleInputChange}
                            />
                            <span className="mt-1">% ngày, tính từ ngày hết thời hạn thanh toán chi phí.</span>
                        </div>

                        <span className="mt-1">7. Bên nào đã ký hợp đồng mà không thực hiện hoặc đơn phương đình chỉ việc thực hiện hợp đồng mà không có lý do chính đáng thì sẽ chịu mức phạt</span>
                            <input
                                name="rate1"
                                className="border-dotted border-b-2 w-12 py-1 outline-none text-center"
                                value={formData.rate1}
                                onChange={handleInputChange}
                            />
                        <span>% giá trị phần hợp đồng đã ký.</span>
                        
                        <h1 className="mt-1">8. Nếu xảy ra trường hợp có một bên gây ra nhiều loại vi phạm thì bên này chỉ phải chịu một loại phạt có số tiền phạt ở mức cao nhất mà các bên đã thoả thuận trong hợp đồng.</h1>
                        <h2 className="font-bold mt-1">Điều 9: Giải quyết tranh chấp hợp đồng</h2>
                        <h1 className="mt-1">1. Hai bên cam kết thực hiện đúng các điều khoản đã thoả thuận.</h1>
                        <h1 className="mt-1">2. Nếu có vấn đề phát sinh, các bên có trách nhiệm kịp thời thông báo cho bên còn lại và tích cực thỏa thuận giải quyết trên cơ sở thoả thuận, bình đẳng cùng có lợi.</h1>
                        <h1 className="mt-1">3.  Trường hợp các bên không tự thương lượng, hòa giải được thì mới đưa vụ tranh chấp ra Toà án giải quyết.</h1>
                        <h2 className="font-bold mt-1">Điều 10: Các thỏa thuận khác</h2>
                        <h2 className="font-bold mt-1">Điều 11: Hiệu lực của hợp đồng</h2>

                        <div className="flex items-end w-full">
                        <span className="font-normal mr-2">Hợp đồng này có hiệu lực từ ngày ký đến ngày</span>
                        <input
                            name="valid_date"
                            className="border-dotted border-b-2 py-1 outline-none text-center"
                            value={formData.valid_date}
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className="flex flex-wrap items-end mt-1">
                        <span className="mr-1">Hợp đồng này lập thành</span>
                        <input
                            name="version"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center items-end"
                            value={formData.version}
                            onChange={handleInputChange}
                        />
                        <span>bản và có giá trị như nhau, mỗi bên giữ</span>
                        <input
                            name="version1"
                            className="border-dotted border-b-2 w-1/12 py-1 outline-none text-center items-end"
                            value={formData.version1}
                            onChange={handleInputChange}
                        />
                        <span>bản</span>
                        </div>
                        {/* Signatures */}
                        <div style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px", width: "100%", alignItems: "flex-end", alignSelf: "stretch" }}>
                            <div style={{ textAlign: "center" }}>
                            <h3 className="font-bold mt-1">BÊN A</h3>
                            <p>(Ký và ghi rõ họ tên)</p>
                            <input
                                name="signA"
                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                value={formData.signA}
                                onChange={handleInputChange}
                            />
                            </div>
                            <div style={{ textAlign: "center" }}>
                            <h3 className="font-bold mt-1">BÊN B</h3>
                            <p>(Ký và ghi rõ họ tên)</p>
                            <input
                                name="signB"
                                className="border-dotted border-b-2 py-1 outline-none text-center"
                                value={formData.signB}
                                onChange={handleInputChange}
                            />
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}