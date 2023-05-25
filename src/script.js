fetch("https://voodoo-sandbox.myshopify.com/products.json?limit=12")
    .then(res => res.json())
    .then((data) => {
        let listData = ""
        listData = data.products.map((value) => {
            return `
                <div class="hover:border-b-2 border-black">
                    <div class="relative border border-black rounded h-[300px] mb-2 bg-no-repeat bg-cover bg-center w-full cursor-pointer" style="background-image: url(${value.images[0].src})">
                        <div class="bg-black w-fit h-fit text-white p-2 uppercase rounded m-3 text-[12px]">Used</div>
                    </div>
        
                    <div class="flex justify-between">
                        <div class="font-bold">
                            <div>${value.title}</div>
                            <div>${value.variants[0].price} KR.</div>
                        </div>
                        <div class="text-end">
                            <div class="font-medium">Condition</div>
                            <div>Slightly used</div>
                        </div>
                    </div>
                </div>
            `
        }).join("")
        document.getElementById("list")
            .innerHTML = listData
    })



const dropdownBtn = document.getElementById("dropdownBtn")
const dropdownMenu = document.getElementById("dropdownMenu")

dropdownBtn.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("hidden")){
        dropdownMenu.classList.remove('hidden');
        dropdownMenu.classList.add('flex');
    } else {
        dropdownMenu.classList.remove('flex');
        dropdownMenu.classList.add('hidden');
    }
})


