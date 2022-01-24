<?php

namespace App\Http\Controllers;

use App\Events\OrdersEvent;
use App\Models\PlacedOrders;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlacedOrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $orders = PlacedOrders::with('orders.orderDesc')->orderBy('created_at', 'DESC')->get();
        return response(['code' => 200, 'message' => $orders], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //

        $getPlaceOrdersLastId = PlacedOrders::orderBy('created_at', 'DESC')->first();
        $refId =  isset($getPlaceOrdersLastId->id) ? $getPlaceOrdersLastId->id + 1 : 1;
        $no = 0;
        foreach ($request->all() as $value) {
            $payload[$no] = [
                'refId' => $refId,
                'menu_item_id' => $value['itemId'],
                'quantity' => 1,
                "created_at" => Carbon::now(),

            ];
            $no++;
        }
        $orderNo = Str::random(6);
        DB::table('orders')->insert($payload);
        PlacedOrders::insert([
            'refId' => $refId,
            'orderNo' => $orderNo,
            'created_at' => Carbon::now()
        ]);
        $orders = PlacedOrders::with('orders.orderDesc')->where('orderNo', $orderNo)->firstOrFail();
        broadcast(new OrdersEvent($orders));

        return response($orders, 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PlacedOrders  $placedOrders
     * @return \Illuminate\Http\Response
     */
    public function show(PlacedOrders $placedOrders)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PlacedOrders  $placedOrders
     * @return \Illuminate\Http\Response
     */
    public function edit(PlacedOrders $placedOrders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PlacedOrders  $placedOrders
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PlacedOrders $placedOrders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PlacedOrders  $placedOrders
     * @return \Illuminate\Http\Response
     */
    public function destroy(PlacedOrders $placedOrders)
    {
        //
    }
}
