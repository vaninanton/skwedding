<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class IndexController extends Controller
{
    public function __invoke(): View
    {
        $weddingDay = today()
            ->setTimezone('Europe/Moscow')
            ->setDate(2023, 07, 28)
            ->setTime(16, 0, 0);
        $days = today()->diffInDays($weddingDay);

        return view('welcome', compact('days'));
    }
}
