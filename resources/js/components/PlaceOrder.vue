<template>
    <div class="fixed inset-0 flex justify-center items-center h-screen w-full">
        <div class="fixed w-full h-full bg-green-900"></div>

        <div
            class="flex flex-col w-96 h-5/6 z-10 bg-white rounded-xl shadow-xl p-3"
        >
            <div class="mb-4 text-lg font-bold">Review your order</div>
            <div class="flex flex-col justify-between h-full w-full">
                <ul>
                    <li
                        class="flex justify-between"
                        v-for="(order, i) in orderDetails"
                        :key="i"
                    >
                        <div>
                            {{ order.description }}
                        </div>
                        <div>
                            {{ order.price }}
                        </div>
                    </li>
                </ul>

                <div class="flex flex-col">
                    <div class="flex justify-between mb-6">
                        <div class="font-bold items-end">Total :</div>
                        <div class="font-bold text-green-900">
                            ₱{{ orderDetails.reduce((a, b) => a + b.price, 0) }}
                        </div>
                    </div>
                    <div class="flex space-x-2 justify-between">
                        <button
                            class="bg-gray-800 w-6/12 text-white py-2 px-4 rounded-lg text-sm font-semibold"
                            @click="$emit('cancel-order')"
                        >
                            CANCEL
                        </button>
                        <button
                            @click="placeOrder"
                            class="bg-green-900 w-6/12 text-white py-2 px-4 rounded-lg text-sm font-semibold"
                        >
                            PLACE A ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["checkoutOrders", "orderDetails"],
    methods: {
        placeOrder: function () {
            this.axios
                .post(
                    "http://localhost:8000/api/place-order",
                    this.checkoutOrders
                )
                .then((res) => {
                    this.$emit("cancel-order");
                    this.$emit("clear-cart");
                })
                .catch((err) => console.error(err.message));
        },
    },
};
</script>

<style></style>
