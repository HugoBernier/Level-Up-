<?php

use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

test('guests are redirected to the login page', function () {
    $this->get('/dashboard')->assertRedirect('/login');
});

test('authenticated users can visit the dashboard', function () {
    Permission::create(['name' => 'view-dashboard']);
    $role = Role::findOrCreate('user');
    $role->givePermissionTo([
        'view-dashboard'
    ]);
    $user = User::factory()->create();
    $user->assignRole($role); 
    $this->actingAs($user);

    $this->get('/dashboard')->assertOk();
});