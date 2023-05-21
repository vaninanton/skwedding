<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $weddingDay = today()
        ->setTimezone('Europe/Moscow')
        ->setDate(2023, 07, 28)
        ->setTime(16, 0, 0);
    $days = today()->diffInDays($weddingDay);
    return view('welcome', compact('days'));
});
