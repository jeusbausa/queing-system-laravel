<template>
    <div
        class="flex flex-col mr-4 m-auto bg-white w-full h-5/6 p-2 shadow-lg overflow-y-auto rounded-lg space-y-2 border-2"
    >
        <div class="" v-for="(orderDetails, i) in orders" :key="i">
            <div class="flex items-center justify-between">
                <div class="space-y-2">
                    <div class="font-bold text-lg">
                        {{ orderDetails.orderNo }}
                    </div>
                    <div class="flex">
                        <div
                            v-for="(order, i) in orderDetails.orders"
                            class="mr-2"
                            :key="i"
                        >
                            x{{ order.quantity }}
                            {{ order.order_desc.description }}
                        </div>
                    </div>
                    <div class="text-xs">
                        Date Created: {{ orderDetails.created_at }}
                    </div>
                </div>
                <div class="space-x-2">
                    <button
                        class="w-16 h-16 bg-green-800 text-sm text-white rounded-lg"
                        type="button"
                    >
                        <i class="fas fa-check"></i>
                        <div class="text-xs">Accept</div>
                    </button>
                    <button
                        class="w-16 h-16 bg-red-800 text-sm text-white rounded-lg"
                        type="button"
                    >
                        <i class="fas fa-times"></i>
                        <div class="text-xs">Reject</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
        };
    },
    created() {
        this.loadOrders();
    },
    mounted() {
        Echo.channel("orders-channel").listen("OrdersEvent", (e) => {
            this.orders.unshift(e.orderDetails);
        });
    },
    methods: {
        loadOrders: function () {
            this.axios
                .get("api/orders")
                .then(({ data }) => {
                    this.orders = data.message;
                })
                .catch((err) => console.error(err.message));
        },
    },
};
</script>

<style></style>
