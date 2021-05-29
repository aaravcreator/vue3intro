app.component('product-display', {
    props: {
        premium : {
            type : Boolean,
            required : true
        }
    },
    template :
    /*html*/
    `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <div class="img-holder">
            <p class="ribbon" v-if="onSale">{{title}} On Sale</p>
          <img v-bind:src="image"  :class="{'out-of-stock-img' : !inStock}" alt="">
          </div>
        </div>
        <div class="product-info">
          <!-- <a v-bind:href="link">merolink</a> -->
          <h2>PRODUCT : {{title}}</h2>
          <!-- <p>Description :
            <br>
             {{description}}</p> -->
          <p v-if="stockQty >=10">IN STOCK</p>
          <p v-else-if="stockQty < 10 && stockQty >0" >Few Pieces Left</p>
          <p v-else >OUT OF STOCK</p>


          <!--Shipping Charges -->

          <p>Shipping : {{shipping}}</p>
            <button class="button"
             v-on:click="addToCart" 
            :disabled="!inStock" 
            :class="{disabledButton: !inStock}"
            >Add to Cart</button>
        
            <button class="button" @click="removeFromCart">Remove</button>
          <ul>
            <li v-for="detail in details">- {{detail}}</li>
          </ul>

          
            <div   v-for ="variant, index in variants"
              :key="variant.id" 
              @mouseover="updateVariant(index)" 
              @click="updateVariant(index)"
              class="color-circle"
              :class="{'color-circle-selected': selectedVariant == index}"
              v-bind:style="{ backgroundColor: variant.color }"
              >
            </div>
          
          <br>
          <h2>Sizes</h2>
          <ul>
            <li v-for="size in sizes">{{size}}</li>
          </ul>

        </div>
      </div>
    
    </div>
    
    
    `,

    data(){
        return{
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
        },
        shipping()
        {
            if( this.premium )
            {
                return `FREE`
            }
            return `$2.99`
        }


    }


})