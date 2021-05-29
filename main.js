
const app = Vue.createApp({
    data(){
        return{
            cart:0,
            brand: "Levis",
            product : "Socks",
            description:"Officia amet velit anim consectetur do nostrud ipsum adipisicing reprehenderit.",
            // image: "assets/images/socks_blue.jpg",
            selectedVariant : 0,
            link: "assets/images/socks_green.jpg",
            inStock :true,
            onSale : false,
            //stockQty :20,
            details : ["Cotton","Soft", "For Teens","Washing Machine Friendly"],
            variants : [
                {id:123 , color : 'green', image : "assets/images/socks_green.jpg" , qty: 18 , sale: true },
                {id:124 , color : 'blue', image : "assets/images/socks_blue.jpg" , qty: 10 , sale: true},
                {id:125 , color : 'black', image : "assets/images/socks_black.jpg" , qty: 12, sale: true},
                {id:126 , color : 'yellow', image : "assets/images/socks_green.jpg" , qty: 0, sale: false},
            ],
            sizes : [
                "XL","XXL","M","S"
            ],

        }
    },
    methods:{
        addToCart(){
            if(this.variants[this.selectedVariant].qty == 0){
                this.inStock=false
                return
            }
            
            this.cart +=1
            this.variants[this.selectedVariant].qty -=1
            if(this.variants[this.selectedVariant].qty == 0){
                this.inStock=false
                return
            }
        },

        removeFromCart(){
            
            if (this.cart==0){
                return;
            }
            this.cart -=1
            this.variants[this.selectedVariant].qty +=1
            if(this.variants[this.selectedVariant].qty>0)
            {
                this.inStock=true
            }
        },
        updateVariant(index){

            this.selectedVariant = index
            if(this.variants[this.selectedVariant].qty == 0)
            {
                this.inStock= false
            }
            else
            {
                this.inStock = true
            }
            if(this.variants[this.selectedVariant].sale==true)
            {
                this.onSale = true
            }
            else
            {
                this.onSale = false
            }
            console.log(this.selectedVariant)
        }
    },
    computed:{
        title ()
        {
            return this.brand + ' - ' + this.product
        },
        image()
        {
            return this.variants[this.selectedVariant].image
        },
        stockQty()
        {
            return this.variants[this.selectedVariant].qty
        }


    }
})