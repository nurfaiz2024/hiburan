let hari = new Date().getDay()
console.log(hari)
switch (hari){
    case 1:
        console.log('ini hari senin')
        break
    case 2:
        console.log('ini hari selasa')
        break
    case 3:
        console.log('ini hari rabu')
        break
    case 4:
        console.log('ini hari kamis')
        break
    case 5:
        console.log('ini hari jumat')
        break
    case 6:
        console.log('ini hari sabtu')
        break
    case 7:
        console.log('ini hari ahad')
        break
    default:
        console.log('hari tidak ditemukan')
        
}
let nama = prompt('siapa nama kamu?')
let usia = prompt('berapa usia kamu?')
let pacar = prompt('siapa pacar kamu?')


alert(`
    nama kamau adalah ${nama}
    usia kamu adalah ${usia} tahun
    owh ${pacar} pacarmu kiw kiw kiw
    `)
