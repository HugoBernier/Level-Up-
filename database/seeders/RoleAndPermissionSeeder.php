<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
class RoleAndPermissionSeeder extends Seeder
{
    public function run()
    {
        Permission::create(['name' => 'view-dashboard']);

        $adminRole =  Role::findOrCreate('admin');
        $userRole = Role::findOrCreate('user');

        $userRole->givePermissionTo([
            'view-dashboard'
        ]);
    }
}
