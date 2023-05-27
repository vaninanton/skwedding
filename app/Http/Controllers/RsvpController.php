<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RsvpController extends Controller
{
    public function __invoke(Request $request)
    {
        $msg = [];
        $msg[] = 'Имя: ' . $request->get('name');
        $msg[] = 'Статус: ' . $request->get('rsvp');
        $msg[] = 'Буду: ' . $request->get('count');
        if ($request->get('para_name')) {
            $msg[] = 'Буду c: ' . $request->get('para_name');
        }
        $msg[] = 'С детьми: ' . $request->get('С_детьми', 'нет');
        $msg[] = 'На машине: ' . $request->get('На_машине', 'нет');
        $msg[] = 'Алко: ' . collect($request->get('buhlo', []))->join(', ');

        $url = 'https://api.telegram.org/bot' . config('app.telegram_token') . '/sendMessage';
        $data['chat_id'] = -1001784018152;
        $data['parse_mode'] = 'html';
        $data['text'] = implode(PHP_EOL, $msg);
        Http::post($url, $data);

        return redirect('/')->with('status', 'Данные отправлены, спасибо!');
    }
}
