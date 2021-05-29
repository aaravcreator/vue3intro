app.component('product-review',
{
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="formSubmit">
    <label for="name">Name: </label>
    <input id="name" v-model="name">
    <label for="review">Review: </label>
    <textarea id="review" v-model="review"></textarea>
    <label for="rating">Rating: </label>
    <select id="rating" v-model.number="rating">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    <br>
    <input classs="button" type="submit" value="Submit">
    </form>
    `,
    data(){
        return {
            name : '',
            review : '',
            rating : null
        }
    },
    methods:
    {
        formSubmit()
        {
            console.log('submit clicked')
            let productReview = {
                name : this.name,
                review : this.review,
                rating : this.rating

            }
        this.$emit('form-submitted' , productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
}
)