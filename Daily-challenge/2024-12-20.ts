interface Sach {
  maSach: string;
  tenSach: string;
  tacGia: string;
  theLoai: string[];
  trangThai: 'có sẵn' | 'đang mượn' | 'đang sửa chữa';
  viTri: string;
}

interface DocGia {
  maDocGia: string;
  hoTen: string;
  email: string;
  sachDangMuon?: PhieuMuon[];
  lichSuMuon?: PhieuMuon[];
}

interface PhieuMuon {
  maSach: string;
  maDocGia: string;
  ngayMuon: Date;
  hanTra: Date;
  ngayTraThucTe?: Date;
  tinhTrang: 'đang mượn' | 'đã trả' | 'quá hạn';
}

class ThuVien {
  private sach: Sach[] = [];
  private docGia: DocGia[] = [];
  private phieuMuon: PhieuMuon[] = [];

  addSach(maSach: string, tenSach: string, tacGia: string, theLoai: string[], trangThai: 'có sẵn' | 'đang mượn' | 'đang sửa chữa', viTri: string) {
    const newSach: Sach = {
      maSach,
      tenSach,
      tacGia,
      theLoai,
      trangThai,
      viTri
    };
    this.sach.push(newSach);
  }

  addDocGia(maDocGia: string, hoTen: string, email: string, sachDangMuon?: PhieuMuon[], lichSuMuon?: PhieuMuon[]) {
    const newDocGia: DocGia = {
      maDocGia,
      hoTen,
      email,
      sachDangMuon,
      lichSuMuon
    };
    this.docGia.push(newDocGia);
  }

  muonSach(maDocGia: string, maSach: string): PhieuMuon {
    const docGia = this.docGia.find(dg => dg.maDocGia === maDocGia);
    const sach = this.sach.find(s => s.maSach === maSach);

    if (!docGia || !sach || sach.trangThai !== 'có sẵn') {
      throw new Error('Không thể mượn sách');
    }

    const phieuMuon: PhieuMuon = {
      maSach: maSach,
      maDocGia: maDocGia,
      ngayMuon: new Date(),
      hanTra: new Date(new Date().setDate(new Date().getDate() + 7)),
      tinhTrang: 'đang mượn'
    };

    this.phieuMuon.push(phieuMuon);
    sach.trangThai = 'đang mượn';

    docGia.sachDangMuon?.push(phieuMuon);

    return phieuMuon;
  }

  traSach(maPhieuMuon: string, tinhTrangSach: string): string {
    const phieuMuon = this.phieuMuon.find(pm => pm.maSach === maPhieuMuon);
    
    if (!phieuMuon) {
      return 'Phiếu mượn không tồn tại';
    }
    
    if (tinhTrangSach === 'đã trả') {
      phieuMuon.tinhTrang = 'đã trả';
      const sach = this.sach.find(s => s.maSach === phieuMuon.maSach);
      if (sach) {
        sach.trangThai = 'có sẵn';
      }
      return 'Trả sách thành công';
    }
    
    return 'Trạng thái sách không hợp lệ';
  }

  kiemTraQuaHan(): string {
    const currentDate = new Date();
    const overdueBooks = this.phieuMuon.filter(pm => pm.tinhTrang === 'đang mượn' && pm.hanTra < currentDate);

    if (overdueBooks.length > 0) {
      overdueBooks.forEach(pm => {
        pm.tinhTrang = 'quá hạn';
        const sach = this.sach.find(s => s.maSach === pm.maSach);
        if (sach) {
          sach.trangThai = 'đang mượn';
        }
      });
      return 'Cập nhật sách quá hạn thành công';
    }
    return 'Không có sách quá hạn';
  }

  timSach(tuKhoa: string): Sach[] {
    return this.sach.filter(s => s.tenSach.toLowerCase().includes(tuKhoa.toLowerCase()));
  }

  thongKeDocGia(maDocGia: string): string {
    const docGia = this.docGia.find(dg => dg.maDocGia === maDocGia);
    
    if (!docGia) {
      return 'Độc giả không tồn tại';
    }

    const muonCount = docGia.sachDangMuon ? docGia.sachDangMuon.length : 0;
    const traCount = docGia.lichSuMuon ? docGia.lichSuMuon.length : 0;

    return `Độc giả ${docGia.hoTen} đã mượn ${muonCount} sách và đã trả ${traCount} sách.`;
  }

  guiThongBaoQuaHan(): string {
    const currentDate = new Date();
    const overdueBooks = this.phieuMuon.filter(pm => pm.tinhTrang === 'quá hạn' && pm.hanTra < currentDate);

    if (overdueBooks.length > 0) {
      overdueBooks.forEach(pm => {
        const docGia = this.docGia.find(dg => dg.maDocGia === pm.maDocGia);
        if (docGia) {
          // Giả lập gửi email
          console.log(`Gửi email thông báo quá hạn cho độc giả: ${docGia.hoTen}`);
        }
      });
      return 'Đã gửi thông báo quá hạn cho các độc giả';
    }
    return 'Không có sách quá hạn để thông báo';
  }
}

// Dữ liệu mẫu
const thuVienA = new ThuVien();
thuVienA.addSach('S001', 'Lập trình TypeScript', 'John Doe', ['Công nghệ', 'Lập trình'], 'có sẵn', 'Kệ 1');
thuVienA.addSach('S002', 'React cho người mới bắt đầu', 'Jane Smith', ['Công nghệ', 'Lập trình'], 'có sẵn', 'Kệ 2');
thuVienA.addDocGia('User1', 'Nguyen Van A', 'ng.qc.duc@gmail.com');
thuVienA.addDocGia('User2', 'Trần Thị B', 'tran.thi.b@gmail.com');

// Mượn sách
thuVienA.muonSach('User1', 'S001');
thuVienA.muonSach('User2', 'S002');

// Trả sách
console.log(thuVienA.traSach('S001', 'đã trả'));  // Trả sách thành công
console.log(thuVienA.traSach('S002', 'quá hạn'));  // Trạng thái sách không hợp lệ

// Kiểm tra quá hạn
console.log(thuVienA.kiemTraQuaHan());  // Cập nhật sách quá hạn thành công

// Tìm sách
console.log(thuVienA.timSach('TypeScript'));  // Tìm thấy sách 'Lập trình TypeScript'

// Thống kê độc giả
console.log(thuVienA.thongKeDocGia('User1'));  // Độc giả Nguyễn Văn A đã mượn 1 sách và đã trả 0 sách.

// Gửi thông báo quá hạn
console.log(thuVienA.guiThongBaoQuaHan());  // Đã gửi thông báo quá hạn cho các độc giả
