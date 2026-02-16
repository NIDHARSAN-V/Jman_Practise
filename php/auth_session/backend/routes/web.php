<?php

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

