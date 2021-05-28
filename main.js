
const app = Vue.createApp({
    data(){
        return{
            cart:0,
            brand: "Levis",
            product : "Socks",
            description:"Officia amet velit anim consectetur do nostrud ipsum adipisicing reprehenderit.",
            image: "assets/images/socks_blue.jpg",
            link: "assets/images/socks_green.jpg",
            inStock :true,
            stockQty :20,
            details : ["Cotton","Soft", "For Teens","Washing Machine Friendly"],
            variants : [
                {id:123 , color : 'green', image : "assets/images/socks_green.jpg" , qty: 18 },
                {id:124 , color : 'blue', image : "assets/images/socks_blue.jpg" , qty: 0},
            ],
            sizes : [
                "XL","XXL","M","S"
            ],

        }
    },
    methods:{
        addToCart(){
            if(this.stockQty == 0){
                this.inStock=false
                return
            }
            
            this.cart +=1
            this.stockQty -=1
            if(this.stockQty == 0){
                this.inStock=false
                return
            }
        },

        removeFromCart(){
            
            if (this.cart==0){
                return;
            }
            this.cart -=1
            this.stockQty +=1
            if(this.stockQty>0)
            {
                this.inStock=true
            }
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
    computed:{
        title ()
        {
            return this.brand + ' - ' + this.product
        }

    }
})