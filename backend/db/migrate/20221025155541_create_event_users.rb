class CreateEventUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :event_users do |t|
      t.integer :id_user
      t.integer :id_event

      t.timestamps
    end
  end
end
