package es.iespuertodelacruz.nla.institutov2.services.interfaces;

import java.util.List;
/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

public interface IServiceGeneric<T, E> {
	List<T> findAll();
	T findById(E id);
	T save(T t);
	boolean delete(E id);
	boolean update(T t);
}
