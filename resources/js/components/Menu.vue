<template>
    <div class="flex flex-col h-screen">
        <div class="flex justify-center items-center w-full h-16 bg-green-700">
            <div class="font-bold text-lg text-white">Dev's Milk Tea Shop</div>
        </div>
        <div class="flex-1 bg-gray-300 p-2">
            <div class="flex space-x-3 h-full">
                <div class="flex p-3 w-full bg-white">
                    <div class="grid grid-cols-4 gap-10">
                        <div
                            class="w-40 h-40 shadow-lg bg-white rounded-lg cursor-pointer"
                            v-for="(menu, i) in menus"
                            :key="i"
                            @click="selectOrder(menu)"
                        >
                            <div
                                class="flex flex-col justify-center items-center w-full h-full"
                            >
                                <img
                                    :src="menu.image"
                                    alt=""
                                    srcset=""
                                    class="w-24 h-24 object-contain"
                                />
                                <div class="font-bold text-sm">
                                    {{ menu.description }}
                                </div>
                                <div class="font-semibold text-xs">
                                    ₱ {{ menu.price }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- checkout -->
                <div class="flex-none w-60 bg-white">
                    <div
                        class="flex flex-col py-5 justify-between w-full h-full"
                    >
                        <div>
                            <div
                                class="p-2 font-sans text-center font-bold text-md mb-6 text-green-900"
                            >
                                ORDER DETAILS
                            </div>
                            <div class="flex flex-col px-2">
                                <div
                                    class="flex justify-between font-semibold text-sm"
                                    v-for="(orderDetail, i) in orderDetails"
                                    :key="i"
                                >
                                    <div>{{ orderDetail.description }}</div>
                                    <div>₱ {{ orderDetail.price }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="px-2">
                            <div class="flex justify-between mb-6">
                                <div class="font-bold items-end">Total :</div>
                                <div class="font-bold text-green-900">
                                    ₱{{
                                        orderDetails.reduce(
                                            (a, b) => a + b.price,
                                            0
                                        )
                                    }}
                                </div>
                            </div>
                            <button
                                :disabled="!customerHasItems"
                                @click="placeOrder = true"
                                class="bg-green-800 p-2 w-full text-white rounded-lg text-sm"
                                :class="{
                                    'bg-gray-500': !customerHasItems,
                                    'cursor-not-allowed': !customerHasItems,
                                }"
                            >
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <PlaceOrder
        v-if="placeOrder"
        :orderDetails="orderDetails"
        :checkoutOrders="checkoutOrders"
        @cancel-order="placeOrder = false"
        @clear-cart="clearCheckOutHistory"
    />
</template>

<script>
import PlaceOrder from "./PlaceOrder.vue";
export default {
    components: {
        PlaceOrder,
    },
    created() {
        this.loadMenus();
    },
    data() {
        return {
            placeOrder: false,
            orderDetails: [],
            checkoutOrders: [],
            menus: [],
        };
    },
    methods: {
        selectOrder: function (productInfo) {
            this.orderDetails.push(productInfo);
            this.checkoutOrders.push({
                itemId: productInfo.id,
                description: productInfo.description,
            });
        },
        loadMenus: function () {
            this.axios
                .get("api/menus")
                .then(({ data }) => {
                    this.menus = data.message;
                })
                .catch((err) => console.error(err.message));
        },
        clearCheckOutHistory: function () {
            this.orderDetails = [];
            this.checkoutOrders = [];
        },
    },
    computed: {
        customerHasItems: function () {
            return !!this.checkoutOrders.length;
        },
    },
};
</script>

<style></style>
