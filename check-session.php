<?php
session_start();
echo json_encode(['wallet' => $_SESSION['wallet'] ?? null]);