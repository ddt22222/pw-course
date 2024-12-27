interface NguyenLieu {
    ten: string;
    donVi: "ml" | "g" | "muong";
    soLuong: number;
  }
  
  interface CongThuc {
    ten: string;
    nguyenLieu: NguyenLieu[]; // Các nguyên liệu cần thiết
    cachLam: string[];
    doKho: 1 | 2 | 3;  // Độ khó pha chế
  }
  
  class QuanLyDoUong {
    private nguyenlieu: NguyenLieu[] = [];
    private congthuc: CongThuc[] = [];
  
    // Kiểm tra khả năng pha chế
    kiemTraKhaNangPhaChe(congThuc: CongThuc): boolean {
      for (let nl of congThuc.nguyenLieu) {
        const available = this.nguyenlieu.find(n => n.ten === nl.ten);
        if (!available || available.soLuong < nl.soLuong) {
          return false;  // Không đủ nguyên liệu
        }
      }
      return true;  // Có đủ nguyên liệu
    }
  
    // Liệt kê nguyên liệu còn thiếu
    thongKeNguyenLieuThieu(congThuc: CongThuc): NguyenLieu[] {
      const nguyenLieuThieu: NguyenLieu[] = [];
      for (let nl of congThuc.nguyenLieu) {
        const available = this.nguyenlieu.find(n => n.ten === nl.ten);
        if (!available || available.soLuong < nl.soLuong) {
          const thiếu = { ...nl, soLuong: nl.soLuong - (available?.soLuong || 0) };
          nguyenLieuThieu.push(thiếu);
        }
      }
      return nguyenLieuThieu;
    }
  
    // Thực hiện pha chế (trừ nguyên liệu)
    phaChe(congThuc: CongThuc): boolean {
      if (this.kiemTraKhaNangPhaChe(congThuc)) {
        // Trừ đi nguyên liệu đã dùng
        for (let nl of congThuc.nguyenLieu) {
          const available = this.nguyenlieu.find(n => n.ten === nl.ten);
          if (available) {
            available.soLuong -= nl.soLuong;
          }
        }
        return true; // Pha chế thành công
      }
      return false; // Không đủ nguyên liệu
    }
  
    // Bổ sung nguyên liệu
    themNguyenLieu(nguyenLieu: NguyenLieu): void {
      const existing = this.nguyenlieu.find(n => n.ten === nguyenLieu.ten);
      if (existing) {
        existing.soLuong += nguyenLieu.soLuong;
      } else {
        this.nguyenlieu.push(nguyenLieu);
      }
    }
  
    // Lấy danh sách đồ uống có thể pha chế
    layDanhSachCoThePha(): CongThuc[] {
      return this.congthuc.filter(congThuc => this.kiemTraKhaNangPhaChe(congThuc));
    }
  
    // Thêm công thức đồ uống
    themCongThuc(congThuc: CongThuc): void {
      this.congthuc.push(congThuc);
    }
  }
  
  // Test cases
  
  const quanLy = new QuanLyDoUong();
  
  // Thêm nguyên liệu
  quanLy.themNguyenLieu({ ten: 'Đường', donVi: 'g', soLuong: 500 });
  quanLy.themNguyenLieu({ ten: 'Nước', donVi: 'ml', soLuong: 1000 });
  quanLy.themNguyenLieu({ ten: 'Sữa', donVi: 'ml', soLuong: 300 });
  
  // Thêm công thức
  quanLy.themCongThuc({
    ten: 'Cà phê sữa',
    nguyenLieu: [
      { ten: 'Đường', donVi: 'g', soLuong: 50 },
      { ten: 'Nước', donVi: 'ml', soLuong: 200 },
      { ten: 'Sữa', donVi: 'ml', soLuong: 100 },
    ],
    cachLam: ['Pha cà phê', 'Thêm sữa', 'Thêm đường'],
    doKho: 2,
  });
  
  // Kiểm tra khả năng pha chế
  console.log(quanLy.kiemTraKhaNangPhaChe({
    ten: 'Cà phê sữa',
    nguyenLieu: [
      { ten: 'Đường', donVi: 'g', soLuong: 50 },
      { ten: 'Nước', donVi: 'ml', soLuong: 200 },
      { ten: 'Sữa', donVi: 'ml', soLuong: 100 },
    ],
    cachLam: ['Pha cà phê', 'Thêm sữa', 'Thêm đường'],
    doKho: 2,
  }));  // true
  
  // Liệt kê nguyên liệu thiếu
  console.log(quanLy.thongKeNguyenLieuThieu({
    ten: 'Cà phê sữa',
    nguyenLieu: [
      { ten: 'Đường', donVi: 'g', soLuong: 100 },
      { ten: 'Nước', donVi: 'ml', soLuong: 250 },
      { ten: 'Sữa', donVi: 'ml', soLuong: 150 },
    ],
    cachLam: ['Pha cà phê', 'Thêm sữa', 'Thêm đường'],
    doKho: 2,
  }));  // Liệt kê nguyên liệu thiếu
  
  // Thực hiện pha chế
  console.log(quanLy.phaChe({
    ten: 'Cà phê sữa',
    nguyenLieu: [
      { ten: 'Đường', donVi: 'g', soLuong: 50 },
      { ten: 'Nước', donVi: 'ml', soLuong: 200 },
      { ten: 'Sữa', donVi: 'ml', soLuong: 100 },
    ],
    cachLam: ['Pha cà phê', 'Thêm sữa', 'Thêm đường'],
    doKho: 2,
  }));  // true
  
  // Lấy danh sách có thể pha chế
  console.log(quanLy.layDanhSachCoThePha()); // Danh sách công thức có thể pha chế
  