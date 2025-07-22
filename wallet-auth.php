<?php
session_start();
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);
$address = $data['address'] ?? '';
$signature = $data['signature'] ?? '';

if (!$address || !$signature) {
    echo json_encode(['status' => 'error', 'message' => 'Неверные данные']);
    exit;
}

// Сохраняем в сессию
$_SESSION['wallet'] = $address;

echo json_encode(['status' => 'ok']);