<template>
    <div class="flex bg-green-700 flex-row h-screen w-full">
        <!-- sidebar -->
        <div class="flex w-full">
            <div
                class="flex-none rounded-xl mx-4 shadow-lg m-auto sticky w-52 h-5/6 bg-white"
            >
                <div class="menu p-2 w-full">
                    <div
                        class="font-sans text-center font-bold text-sm mb-6 text-green-900"
                    >
                        DEV'S MILK TEA SHOP ADMIN PANEL
                    </div>
                    <div
                        class="flex flex-col text-center font-semibold space-y-3"
                    >
                        <!-- <router-link class="rounded-xl p-2" to="/"
                            >MENU
                        </router-link> -->
                        <router-link class="rounded-xl p-2" to="/admin/orders"
                            >ORDERS
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- content -->
            <router-view />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
